export const ANI = () => {
  const timeline = gsap.timeline();
  timeline.from(".movie-details .title", {
    opacity: 0,
    y: -50,
  });

  gsap.registerPlugin(ScrollSmoother);
  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1, // 속도정의
  });
};
