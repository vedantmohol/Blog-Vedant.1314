import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About V Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to V Blog! This blog is a personal project created by
              Vedant Mohol, a computer science student, MERN stack developer,
              and cloud computing consultant, to share his knowledge and
              experiences through his engineering journey.Hope that V Blog will
              help you in some way.
            </p>
            <p>
              Here you will find regular posts covering a range of topics.
              V Blog is website where you can find some computer science related
              concepts. Concepts such as Compiler Design, Artificial Intelligence, Data Science,
              Internet of Things, Computer Graphics, Theory of Computation, Database Management System,
              Computer Networks, Operating Systems, Software Design and Modeling,
              Design and Analysis of Algorithms, Web Technology.
            </p>
            <p>
              We encourage active participation and a collaborative
              learning environment. Feel free to leave comments on posts, engage
              in discussions with other readers, and share your own experiences.
              By fostering a community of learners, we aim to help everyone grow
              and improve their understanding of technology together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
