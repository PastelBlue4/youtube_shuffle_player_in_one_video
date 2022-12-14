import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { logicAfterLinkState, playListState } from "../components/atom";
import TimeLineButton from "../components/TimeLineButton";
import VideoContainer from "../components/VideoContainer";

export default function Home() {
  const continuousPlay = "&autoplay=1";

  const [videoLink, setVideoLink] = useRecoilState(logicAfterLinkState);

  const [videoFullLink, setVideoFullLink] = useState("");

  const [playList, setPlayList] = useState("");

  const [playListObj, setPlayListObj] = useState("");

  const [currnetSong, setCurrentSong] = useState({});
  const inputLinkValue = useRef("");
  const inputPlayListValue = useRef("");

  const [nowPlaying, setNowPlaying] = useState(false);

  const testObj = [
    {
      songName: "song1",
      startPoint: "213",
      songLenght: "10",
    },
    {
      songName: "song2",
      startPoint: "933",
      songLenght: "10",
    },
    {
      songName: "song3",
      startPoint: "1166",
      songLenght: "10",
    },
    {
      songName: "song4",
      startPoint: "448",
      songLenght: "10",
    },
  ];

  function submitLink(e) {
    e.preventDefault();
    setVideoLink(
      `https://www.youtube.com/embed/${inputLinkValue.current.value}`
    );
    inputLinkValue.current.value = "";
  }

  useEffect(() => {
    if (videoLink != "") {
      setVideoFullLink(videoLink);
    }
  }, [videoLink]);

  function submitPlayList(e) {
    e.preventDefault();
    setPlayList(inputPlayListValue.current.value);
    inputPlayListValue.current.value = "";
  }

  useEffect(() => {
    if (playList != "") {
      console.log(`처음 입력값, ${playList}`);

      const dividePlayListOrder = playList.split(/[,]/);
      console.log(`쉼표로 분리 ${dividePlayListOrder}`);

      dividePlayListOrder.forEach((value) => {
        let logicresult = value.split(/[-]/);
        console.log(logicresult);
      });

      function playListLogic(songName, startPoint) {
        this.songName = songName;
        this.startPoint = startPoint;
      }
    }
  }, [playList]);

  const nowPlayList = () => {
    console.log(playListObj);
  };

  //입력을 받고 > 오브젝트 화 > 플레이리스트 > 실제 플레이리스트

  function playTime(ms) {
    return new Promise((res) => setTimeout(res, ms * 1000));
  }

  async function startPlay() {
    for (const currentValue of testObj) {
      setVideoFullLink(
        videoLink + `?start=${currentValue.startPoint}` + continuousPlay
      );
      setCurrentSong(currentValue);
      setNowPlaying(true);
      await playTime(currentValue.songLenght);
    }
  }

  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
      </div>
      <div className="flex justify-center w-full ">
        <h1 className="mt-10 mb-3 text-5xl">
          Youtube Shuffle Player In One Video
        </h1>
      </div>
      <form>
        <div className="flex justify-center w-full">
          <input
            placeholder="  write your youtube link"
            ref={inputLinkValue}
            className="w-2/4 mt-2 border h-11 border-sindigo-600"
          />
          <button
            onClick={submitLink}
            className="px-10 py-5 mt-2 mb-5 text-white bg-indigo-500 rounded-xl"
          >
            submit
          </button>
        </div>
      </form>
      <div className="w-full h-auto border border-red-500">
        <div className="flex justify-center w-full">
          <div>
            <VideoContainer finalLink={videoFullLink} />
            <form className="flex flex-col">
              <textarea
                ref={inputPlayListValue}
                placeholder="Share to me your playlist :)"
                className="w-[660px] h-[360px] border border-indigo-300 mt-6"
              />
              <button
                className="px-3 py-5 mt-5 text-xl text-white rounded-2xl bg-violet-600"
                onClick={submitPlayList}
              >
                Submit PlayList! o0o
              </button>
            </form>
            <div className="grid grid-flow-col gap-1 mt-10 border border-orange-600 ">
              {testObj.map(({ songName, startPoint }, index) => (
                <TimeLineButton
                  onClick={() =>
                    setVideoFullLink(
                      videoLink + `?start=${startPoint}` + continuousPlay
                    )
                  }
                  key={index}
                  startPoint={startPoint}
                  songName={songName}
                />
              ))}
            </div>
            <div>
              <button
                className="py-3 text-white rounded-lg bg-sky-900 px-7"
                onClick={startPlay}
              >
                Play Start!
              </button>
              {nowPlaying ? (
                <span> now playing : {currnetSong.songName} </span>
              ) : null}
            </div>
            <button onClick={nowPlayList}>testbtn</button>
          </div>
        </div>
      </div>
    </>
  );
}

// ("https://www.youtube.com/embed/g0lQESej9zc");
// ("https://www.youtube.com/embed/g0lQESej9zc");
// ("https://www.youtube.com/embed/Irmkb1psaJ0?start=10");
// ("https://www.youtube.com/embed/Irmkb1psaJ0&ab_channel=%EC%98%A4%EB%B6%84%EC%88%9C%EC%82%AD");
// ("https://www.youtube.com/embed/Irmkb1psaJ0&ab_channel=%EC%98%A4%EB%B6%84%EC%88%9C%EC%82%AD");
// "https://www.youtube.com/watch?v=g0lQESej9zc&ab_channel=KenardLau "(
//   "https://www.youtube.com/embed/g0lQESej9zc "
// )("https://www.youtube.com/embed/g0lQESej9zc");
// 유튜브 영상 아이디는 항상 11

// https://www.youtube.com/embed/Irmkb1psaJ0

// https://youtube.com/embed/g0lQESej9zc
