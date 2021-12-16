---
layout: post
title: "fibridge - Access huge files in the user's browser externally over HTTP"
image: /public/images/blog/fibridge_banner.png
subtitle:
tags:
  - Anders Pitman
  - fibridge
  - streaming
  - developers
---

# Introduction

Imagine you recorded a large video file that you want to share with a friend.
Let's say it's 4GB in size. How would you get it to them? You could upload it
to Google Drive or Dropbox. But then you'd have to upload the entire file, and
your friend would have to download the whole thing before they could watch it.

If you're hip you could use a service such as
<a href='https://file.pizza/' target='_blank'>FilePizza</a> or
<a href='https://instant.io/' target='_blank'>Instant.io</a>, which use the
the WebRTC protocol to send the file directly from your browser to your
friend's. This is better, but the file is still taking space on your friend's
computer. Maybe they want to watch it on their phone and don't have 4GB to
spare.

If you're more technical, you could upload the file to Amazon S3 or a private
web server or Plex server. This would save your friend the trouble of
downloading it (S3 supports
<a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests' target='_blank'>HTTP range requests</a>,
which would allow them to stream it), but it doesn't save you the trouble of
uploading it or managing the server.

fibridge was designed for a very similar type of situation. fibridge
(**FI**le **BRIDGE**) creates a bridge from your computer, to a server, to your friend's
computer. It allows your friend to use any app capable of playing videos
over HTTP (browser, VLC, etc) to stream the video directly from your computer,
without ever having to download the entire file. Seeking and pausing work
as expected.

# How does it work?

**Note: This section is somewhat technical and more targeted towards
developers. Feel free to skip it.**

The core of fibridge is the proxy server, which is a web server speaking HTTP on
one side, and a WebSocket server speaking the fibridge protocol on the other.
In order to host a file, a JavaScript library running in the browser connects
to the WebSocket server. The server gives that browser tab an ID, which the
browser uses to generate URLs for the files.  Any requests coming over HTTP for
that ID are forwarded to that browser through the proxy.

The fibridge protocol is pretty simple. It could easily be implemented outside
the browser, for example if you wanted to make a Node script to host a
whole folder of images without having to select them each individually.

All of the heavy lifting is done by
<a href='https://github.com/omnistreams/omnistreams-spec' target='_blank'>omnistreams</a>,
which we plan to more fully introduce in a future post. 

Note: This concept is very similar to the
<a href='https://github.com/jed/browserver-node' target='_blank'>browserver</a>,
project, which appears to be no longer developed. The key difference is that
fibridge implements HTTP range requests, which enables the files to be
streamed.

# Why did the iobio team create this?

Although I think the video streaming example is pretty cool, why did we
actually create this?

<a href='http://iobio.io' target='_blank'>iobio</a> is a suite of open source
tools for real-time genomic data analysis in the browser.  As such we do **a
lot** of web streaming. Genomic data files can easily be in the 2GB-200GB
range, or even bigger (single files in the terabyte range are not unheard of).
Load up this link:
<a href='https://bam.iobio.io' target='_blank'>https://bam.iobio.io</a>
(sorry, not mobile friendly) and click "launch with demo data".

The source data for what you see in that app is a 187GB
<a href='https://samtools.github.io/hts-specs/SAMv1.pdf' target='_blank'>BAM</a>
file that lives on our Amazon S3 bucket. Streaming is the reason we're able to
visualize that file in real time. We sample the file, and figure out exactly
which chunks we need to grab, then use HTTP range requests to get them.

But what if that file happened to be on the
user's hard drive? That's where fibridge comes in. If a user selects a local
BAM file, it is routed through fibridge, over HTTP, and back to the user's
browser. Why all the roundabout? Why does the data have to leave the browser in
the first place? Because the software for processing BAM files is specialized
and doesn't run in web browsers, which necessitates handling the data on our
servers.

Using fibridge allows us to use the exact same code for handling local files
as we do for any other file on the web.

# Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/vUOJfSfncxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you want to run fibridge, you can host it on your own server. Linux
executables can be downloaded from
<a href='https://github.com/anderspitman/fibridge-proxy-rs/releases' target='_blank'>the release page</a>.


# Code

The source code is available
<a href='https://github.com/anderspitman/fibridge-proxy-rs' target='_blank'>on GitHub</a>.
