---
layout: post
title: "fibridge - Stream huge files out of the browser with range requests"
image: /public/images/blog/fibridge_banner.png
subtitle:
tags:
  - Anders Pitman
  - fibridge
  - streaming
  - developers
---

# Introduction

Imagine you recorded a large video file that you wanted to share with a friend.
Let's say it's 4GB in size. How would you get it to them? You could upload it
to Google Drive or Dropbox. But then you'd have to upload the entire file, and
your friend would have to download the whole thing before they could watch it.

If you're hip you could use a service such as
[FilePizza](https://file.pizza/) or
[Instant.io](https://instant.io/), which use the webtorrent protocol over
WebRTC to send the file directly from your browser to your friend's. This is
better, but the file is still taking space on your friend's computer. Maybe
they want to watch it on their phone and don't have 4GB to spare.

If you're more technical, you could upload the file to Amazon S3 or a private
web server. This would save your friend the trouble of downloading it (S3
supports
[HTTP range requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests),
which would allow them to stream it), but it doesn't save you the trouble of
uploading it.

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
to the WebSocket server. The server gives that browser an ID, which the browser
uses to generate URLs for the files.  Any requests coming over HTTP for that ID
are forwarded to that browser through the proxy.

The fibridge protocol is pretty simple. It could easily be implemented outside
the browser, for example if you wanted to make a Node script to host a
whole folder of images without having to select them each individually.

All of the heavy lifting is done by
[omnistreams](https://github.com/omnistreams/omnistreams-spec),
which we plan to more fully introduce in a future post. 

Note: This concept is very similar to the
[browserver](https://github.com/jed/browserver-node)
project, which is no longer developed. The key difference is that fibridge
implements HTTP range requests, which enables the files to be streamed.

# Why did the iobio team create this?

Although I think the video streaming example is pretty cool, why did we
actually create this? iobio is an open source suite of tools for realtime
genomic data analysis in the browser.  As such we do **a lot** of web
streaming. Genomic data files can easily be in the 2GB-200GB range, or even
bigger (single files in the terabyte range are not unheard of). Load up this
link:
<a href='https://bam.iobio.io' target='_blank'>https://bam.iobio.io</a>
(sorry, not mobile friendly) and click "launch with demo data".

The source data for what you see in that app is a 187GB
[BAM](https://samtools.github.io/hts-specs/SAMv1.pdf) file that lives on our
Amazon S3 bucket. Streaming is the reason we're able to
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

There is an instance of fibridge running at
[https://fbrg.xyz](https://fbrg.xyz).

Try opening an mp4 or mov video on your computer, and using the QR code to
start streaming it instantly on your phone.

This is for demonstration purposes only. Remember that all data transferred
runs unencrypted through the fibridge server (although it is encrypted over
HTTPS enroute). Don't upload any sensitive data unless you encrypt it yourself.
We don't store the data or do anything with it; it's just a good practice in
general.

Also please be kind to our bandwidth ;)

If you want to use fibridge heavily for sharing files, you can host it on your
own server. Linux executables can be downloaded from
[the release page](https://github.com/anderspitman/fibridge-proxy-rs/releases).


# Code

The source code is available
[on GitHub](https://github.com/anderspitman/fibridge-proxy-rs)

<!--
<div style="text-align: center; border: 1px solid; margin-bottom: 20px;">
  <img src="/public/images/blog/bam_2.0/help_button.png">
</div>
-->
