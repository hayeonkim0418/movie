export const ANI = () => {
  const timeline = gsap.timeline();
  timeline.from(".movie-details .imgDiv img", {
    // opacity: 0,
    width: 0,
    height: 0,
  });
  timeline.from(".movie-details .title", {
    opacity: 0,
    y: -50,
  });
  timeline.from(".movie-details .basic-info strong", {
    opacity: 0,
    y: -50,
  });
  timeline.from(".movie-details .basic-info span", {
    opacity: 0,
    y: -50,
  });
  timeline.from(".movie-details .basic-info p", {
    opacity: 0,
    y: -50,
    stagger: 0.3,
  });
  timeline.from(".movie-details .plot strong", {
    opacity: 0,
    y: -50,
  });
  timeline.from(".movie-details .plot p", {
    opacity: 0,
    y: -50,
  });
  timeline.from(".movie-details .cast strong", {
    opacity: 0,
    y: -50,
  });
  timeline.from(".movie-details .cast p", {
    opacity: 0,
    y: -50,
    stagger: 0.3,
  });

  gsap.registerPlugin(ScrollSmoother);
  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1, // 속도정의
  });
};
