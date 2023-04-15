// // #make popup usng bootstrap modal in javascript
// function myWorkPopUp() {
//     var myWorkPopUp = document.getElementById("myWorkPopUp");
//     var myWorkPopUpClose = document.getElementById("myWorkPopUpClose");
//     var myWorkPopUpContent = document.getElementById("myWorkPopUpContent");
//     var myWorkPopUpTitle = document.getElementById("myWorkPopUpTitle");
//     var myWorkPopUpImage = document.getElementById("myWorkPopUpImage");
//     var myWorkPopUpDescription = document.getElementById("myWorkPopUpDescription");
//     var myWorkPopUpTechnologies = document.getElementById("myWorkPopUpTechnologies");
//     var myWorkPopUpLiveLink = document.getElementById("myWorkPopUpLiveLink");
//     var myWorkPopUpSourceLink = document.getElementById("myWorkPopUpSourceLink");
//     var myWorkPopUpLiveLinkIcon = document.getElementById("myWorkPopUpLiveLinkIcon");

//     myWorkPopUp.style.display = "block";
//     myWorkPopUpContent.style.transform = "scale(1)";
//     myWorkPopUpContent.style.opacity = "1";
//     myWorkPopUpClose.style.transform = "scale(1)";
//     myWorkPopUpClose.style.opacity = "1";

//     myWorkPopUpTitle.innerHTML = "Title";
//     myWorkPopUpImage.src = "https://via.placeholder.com/300";
//     myWorkPopUpDescription.innerHTML = "Description";
//     myWorkPopUpTechnologies.innerHTML = "Technologies";
//     myWorkPopUpLiveLink.href = "https://www.google.com";
//     myWorkPopUpSourceLink.href = "https://www.google.com";
//     myWorkPopUpLiveLinkIcon.classList.add("fas", "fa-external-link-alt");

//     myWorkPopUpClose.addEventListener("click", function () {
//         myWorkPopUp.style.display = "none";
//         myWorkPopUpContent.style.transform = "scale(0)";
//         myWorkPopUpContent.style.opacity = "0";
//         myWorkPopUpClose.style.transform = "scale(0)";
//         myWorkPopUpClose.style.opacity = "0";
//     }
//     );

// }
// <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
//   Launch demo modal
// </button>

// <!-- Modal -->
// <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//   <div class="modal-dialog modal-dialog-centered" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
