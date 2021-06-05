// export default
//  const imgArray = [];

//  images.forEach(ell => imgArray.push(ell.original));
// console.log(imgArray.indexOf(lightbox__image.src));

// document.addEventListener('keydown', (ev) => {
//   let newIndex;
//   const curentId = imgArray.indexOf(lightbox__image.src);
  
//   if (ev.key === 'ArrowLeft') {
//       newIndex = curentId - 1;
//       if (newIndex === -1) {
//         newIndex = imgArray.length - 1;
//       }
    
//   } else if (ev.key === 'ArrowRight') {
//     newIndex = curentId + 1;
//     if (newIndex === imgArray.length) {
//       newIndex = 0;
//     }
//   }
//   lightbox__image.src = imgArray[newIndex];
// })