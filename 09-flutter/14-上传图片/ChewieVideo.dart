import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
// import 'package:chewie/chewie.dart';

class ChewieVideoDemo extends StatefulWidget {
  ChewieVideoDemo({Key key}) : super(key: key);

  _ChewieVideoDemoState createState() => _ChewieVideoDemoState();
}

class _ChewieVideoDemoState extends State<ChewieVideoDemo> {
  // ChewieController chewieController;

  VideoPlayerController _controller;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    _controller = VideoPlayerController.network(
        'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4')
      ..initialize().then((_) {
        // Ensure the first frame is shown after the video is initialized, even before the play button has been pressed.
        setState(() {});
      });

    // videoPlayerController = VideoPlayerController.network(
    //     'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4');

    // chewieController = ChewieController(
    //   videoPlayerController: videoPlayerController,
    //   aspectRatio: 3 / 2,
    //   autoPlay: true,
    //   looping: true,
    // );
  }
  /*销毁*/
  @override
  void dispose() {
    // videoPlayerController.dispose();
    // chewieController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Video Demo',
      home: Scaffold(
        body: Center(
          child: _controller.value.initialized
              ? AspectRatio(
                  aspectRatio: _controller.value.aspectRatio,
                  child: VideoPlayer(_controller),
                )
              : Container(),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            setState(() {
              _controller.value.isPlaying
                  ? _controller.pause()
                  : _controller.play();
            });
          },
          child: Icon(
            _controller.value.isPlaying ? Icons.pause : Icons.play_arrow,
          ),
        ),
      ),
    );
}



}
