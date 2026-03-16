import "./home.css";
import { Link } from "react-router-dom";

function home() {
  return (
    <div className="home-container min-h-screen px-5 py-8 sm:px-8 md:px-10 md:py-8">
      <div className="home-shell mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-8 md:gap-10">
      <div className="home-header flex flex-col gap-5 font-sans md:flex-row md:items-end md:justify-between">
        <h1 className="home-title font-bold text-center text-4xl md:text-left md:text-6xl">
          hi, im andrew!
        </h1>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
          <a
            href="https://www.linkedin.com/in/andrewbabatunde/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="home-link text-white text-xl font-bold underline transition-colors hover:text-gray-300 md:text-2xl">
              linkedin
            </span>
          </a>
          <a
            href="https://github.com/andrew-babatunde2004"
            target="_blank"
            rel="noreferrer"
          >
            <span className="home-link text-white text-xl font-bold underline transition-colors hover:text-gray-300 md:text-2xl">
              github
            </span>
          </a>
          <Link to="/music">
            <span className="home-link text-white text-xl font-bold underline transition-colors hover:text-gray-300 md:text-2xl">
              music
            </span>
          </Link>
        </div>
      </div>

      <div className="home-content w-full max-w-4xl text-left">
        <p className="mb-4 text-lg leading-relaxed md:text-xl">
          aob85593 [at] uga [dot] edu
        </p>
        <p className="mb-5 max-w-3xl text-lg leading-relaxed md:text-xl">
          currently a computer science major with applications in data science
          and machine learning. self-proclaimed gym enthusiast and avid enjoyer
          of literature and music
        </p>

        <p className="mb-8 text-lg text-white">
          currently enrolled at{" "}
          <a href="https://computing.uga.edu" target="_blank" rel="noreferrer">
            <span className="text-red-600 font-bold underline">
              the university of georgia
            </span>
          </a>
        </p>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">projects</h2>
            <a 
              href="https://github.com/andrew-babatunde2004/UGAHACKS11"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <span className="project-title">ApothoKeep ↗</span>
              <span className="project-description">a gemini-leveraged app to keep track of your food</span>
            </a>
            <a
              href="https://github.com/andrew-babatunde2004/cs1302-api-app"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <span className="project-title">Internship Finder ↗</span>
              <span className="project-description">
                cross references APIs to give accurate weather information about potential internships
              </span>
            </a>
            <a
              href="https://github.com/andrew-babatunde2004/electron-local-music-hoster"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <span className="project-title">Locally Hosted Music Player ↗</span>
              <span className="project-description">
                allows users to run MP3 files from a home server on any device with access
              </span>
            </a>
            <a
              href="https://github.com/andrew-babatunde2004/astrotutor"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <span className="project-title">AstroTutor ↗</span>
              <span className="project-description">
                an OpenAI-leveraged K-12 education app that explains the solar system in an elementary context
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">contributions</h2>
            <a
              href="https://github.com/DevDogs-UGA/Community-Resource-Forum"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <span className="project-title">DevDogs ↗</span>
            </a>
          </div>

          <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-bold">leadership</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="https://ktpgeorgia.com"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <span className="project-title">Kappa Theta Pi @ UGA ↗</span>
              </a>

              <a
                href="https://www.colorstack.org"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <span className="project-title">ColorStack ↗</span>
              </a>
              <a
                href="https://acm-uga.github.io"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <span className="project-title">ACM ↗</span>
              </a>
              <a
                href="https://github.com/DevDogs-UGA"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <span className="project-title">DevDogs ↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="home-footer pt-2 text-sm text-gray-500">
        © 2025 Andrew Babatunde
      </p>
      </div>
    </div>
  );
}

export default home;
