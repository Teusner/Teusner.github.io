---
layout: post
title: transcode videos for Davinci Resolve
date: 2024-09-02 13:00:00
description: a command to transcode videos for Davinci Resolve
tags: graphics-design logo
categories: graphics-design
thumbnail: assets/img/davinci_resolve.png
---

# Introduction

Working with videos in DaVinci Resolve can be a delight, but sometimes, importing footage in different formats can be tedious. Not all formats are supported by Davinci Resolve. To solve this problem, I use ffmpeg to transcode any video format into a *.mov*.

# What You Need

Before diving into the script, you'll need to have the following installed:

- [ffmpeg](https://ffmpeg.org): An open-source tool for handling video, audio, and other multimedia files.
- [DaVinci Resolve](https://www.blackmagicdesign.com/fr/products/davinciresolve): A professional video editing software that supports a wide range of formats.

# The command

```bash
ffmpeg -i input.mp4 -vcodec dnxhd -acodec pcm_s16le -s 1920x1080 -r 30000/1001 -b:v 36M -pix_fmt yuv422p -f mov output.mov
```

This command can be put in bash script to batch convert a lot of videos. 
