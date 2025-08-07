export const IncludeHTML = async (location, target) => {
  try {
    const response = await fetch(location);
    const result = await response.text();

    document.querySelector(target).innerHTML = result;
  } catch (error) {
    alert(error);
  }
};
