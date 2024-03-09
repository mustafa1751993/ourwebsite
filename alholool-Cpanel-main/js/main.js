$(function () {
  $(".list-li").click(function () {
    $(".list-li").removeClass("active");
    $(this).addClass("active");
  });
  $(".list-li-business").click(function () {
    $(".list-li-business").removeClass("active");
    $(this).addClass("active");
  });
  $(".text-title").click(function () {
    $(".text-title").removeClass("active");
    $(this).addClass("active");
  });
  $(".day-p").click(function () {
    $(".day-p").removeClass("active");
    $(this).addClass("active");
  });
  $(".employee").click(function () {
    $(".employee").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination1 .page-link").click(function () {
    $(".pagination1 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination2 .page-link").click(function () {
    $(".pagination2 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination3 .page-link").click(function () {
    $(".pagination3 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination4 .page-link").click(function () {
    $(".pagination4 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination5 .page-link").click(function () {
    $(".pagination5 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination6 .page-link").click(function () {
    $(".pagination6 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination7 .page-link").click(function () {
    $(".pagination7 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination8.page-link").click(function () {
    $(".pagination8 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination9 .page-link").click(function () {
    $(".pagination9 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination10 .page-link").click(function () {
    $(".pagination10 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination11 .page-link").click(function () {
    $(".pagination11 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination12 .page-link").click(function () {
    $(".pagination12 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination13 .page-link").click(function () {
    $(".pagination13.page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination14 .page-link").click(function () {
    $(".pagination14.page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".pagination15 .page-link").click(function () {
    $(".pagination15 .page-link").removeClass("active");
    $(this).addClass("active");
  });
  $(".row-subscription").click(function () {
    $(".row-subscription").removeClass("active");
    $(this).addClass("active");
  });
  $(".day").click(function () {
    $(".day").removeClass("active");
    $(this).addClass("active");
  });
  $(".pay-div").click(function () {
    $(".pay-div").removeClass("active");
    $(this).addClass("active");
  });
  $(".pay-div-business").click(function () {
    $(".pay-div-business").removeClass("active");
    $(this).addClass("active");
  });
});


// login page ...................................................................................................
function viewPassword1() {
  let passField1 = document.getElementById("password-field1");
  let iconEye1 = document.getElementById("icon-eye1");
  if (passField1.type === "password") {
    passField1.type = "text";
    iconEye1.classList = "fa-regular fa-eye";


  } else {
    passField1.type = "password";
    iconEye1.classList = "fa-regular fa-eye-slash";
  }
}
function viewPassword2() {
  let passField2 = document.getElementById("password-field2");
  let iconEye2 = document.getElementById("icon-eye2");
  if (passField2.type === "password") {
    passField2.type = "text";
    iconEye2.classList = "fa-regular fa-eye";


  } else {
    passField2.type = "password";
    iconEye2.classList = "fa-regular fa-eye-slash";
  }
}
function viewPassword3() {
  let passField3 = document.getElementById("password-field3");
  let iconEye3 = document.getElementById("icon-eye3");
  if (passField3.type === "password") {
    passField3.type = "text";
    iconEye3.classList = "fa-regular fa-eye";


  } else {
    passField3.type = "password";
    iconEye3.classList = "fa-regular fa-eye-slash";
  }
}
// home page ........................................................................................................
var options = {
  "annotations": {},
  "chart": {
      "animations": {
          "enabled": true
      },
      "background": "",
      "foreColor": "#333",
      "fontFamily": "droid",
      "height": 300,
      "id": "U9rBP",
      "stacked": true,
      "toolbar": {
          "show": false,
          "tools": {
              "selection": true,
              "zoom": true,
              "zoomin": true,
              "zoomout": true,
              "pan": true,
              "reset": true
          }
      },
      "type": "area",
      "width": '100%'
  },
  "plotOptions": {
      "bar": {
          "borderRadius": 10,
          "borderRadiusApplication": "end",
          "borderRadiusWhenStacked": "last",
          "hideZeroBarsWhenGrouped": false,
          "isDumbbell": false,
          "isFunnel": false,
          "isFunnel3d": true,
          "dataLabels": {
              "total": {
                  "enabled": false,
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                      "color": "#626878",
                      "fontSize": "16px",
                      "fontWeight": 600
                  }
              }
          }
      },
      "bubble": {
          "zScaling": true
      },
      "treemap": {
          "dataLabels": {
              "format": "scale"
          }
      },
      "radialBar": {
          "hollow": {
              "background": "#fff"
          },
          "dataLabels": {
              "name": {},
              "value": {},
              "total": {}
          }
      },
      "pie": {
          "donut": {
              "labels": {
                  "name": {},
                  "value": {},
                  "total": {}
              }
          }
      }
  },
  "dataLabels": {
      "enabled": false,
      "style": {
          "fontWeight": 700
      }
  },
  "fill": {
      "type": "gradient",
      "gradient": {
          "type": "vertical",
          "gradientToColors": [
              "#0A7FEB"
          ],
          "opacityFrom": 0.5,
          "colorStops": [
              {
                  "opacity": 0.2,
                  "offset": 0,
                  "color": "#60A5EF"
              },
              {
                  "opacity": 0.5,
                  "offset": 100,
                  "color": "#FFFFFF"
              }
          ]
      }
  },
  "grid": {
      "padding": {
          "right": 36,
          "left": 15
      }
  },
  "legend": {
      "fontSize": 15,
      "offsetY": 0,
      "itemMargin": {
          "vertical": 0
      }
  },
  "markers": {
      "hover": {
          "sizeOffset": 6
      }
  },
  "series": [
      {
          "name": "Area 1",
          "data": [
              {
                  "x": "السبت",
                  "y": "0"
              },
              {
                  "x": "الأحد",
                  "y": "4"
              },
              {
                  "x": "الاثنين",
                  "y": "8"
              },
              {
                  "x": "الثلاثاء",
                  "y": "4"
              },
              {
                  "x": "الأربعاء",
                  "y": "6"
              },
              {
                  "x": "الخميس",
                  "y": "0"
              }
          ]
      }
  ],
  "stroke": {
      "width": 2,
      "colors": [
          "#1165BF"
      ],
      "fill": {
          "type": "solid",
          "opacity": 0.85,
          "gradient": {
              "shade": "light",
              "type": "vertical",
              "shadeIntensity": 0.5,
              "inverseColors": false,
              "opacityFrom": 0.65,
              "opacityTo": 0.5,
              "stops": [
                  0,
                  100,
                  100
              ],
              "colorStops": []
          }
      }
  },
  "xaxis": {
      "labels": {
          "trim": true,
          "style": {}
      },
      "group": {
          "groups": [],
          "style": {
              "colors": [],
              "fontSize": "16px",
              "fontWeight": 400,
              "cssClass": ""
          }
      },
      "tickAmount": "dataPoints",
      "title": {
          "style": {
              "fontWeight": 700
          }
      }
  },
  "yaxis": {
      "tickAmount": 5,
      "labels": {
          "style": {}
      },
      "title": {
          "style": {
              "fontWeight": 700
          }
      }
  },
  "theme": {
      "palette": "palette4"
  }
}
var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
// control panel page ...............................................................................................
function switchBtn(chartId) {
  var switchContents = document.querySelectorAll('.switch-content');
  switchContents.forEach(function (switchContent) {
    switchContent.style.display = 'none';
  });

  var switchbtns = document.querySelectorAll('.switch-btn');
  switchbtns.forEach(function (switchbtn) {
    switchbtn.classList.remove('active');
  });

  document.getElementById(chartId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="switchBtn(\'' + chartId + '\')"]');
  clickedButton.classList.add('active');
}
switchBtn('chart1');

// managers page ......................................................................................................
function showMContent(mContentId) {
  var managercontents = document.querySelectorAll('.manager-content');
  managercontents.forEach(function (managercontent) {
    managercontent.style.display = 'none';
  });

  var managerbtns = document.querySelectorAll('.manager-btn');
  managerbtns.forEach(function (managerbtn) {
    managerbtn.classList.remove('active');
  });

  document.getElementById(mContentId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showMContent(\'' + mContentId + '\')"]');
  clickedButton.classList.add('active');

  if (mContentId == "mContent1") {
    document.getElementById("addDiv1").style.display = "block";
    document.getElementById("addDiv2").style.display = "none";
  } else if (mContentId == "mContent2") {
    document.getElementById("addDiv1").style.display = "none";
    document.getElementById("addDiv2").style.display = "block";
  } else {
    document.getElementById("addDiv1").style.display = "block";
    document.getElementById("addDiv2").style.display = "none";
  }


}

showMContent('mContent1');

/* tab button store */
function showTab(tabId) {
  var tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(function (tabContent) {
    tabContent.style.display = 'none';
  });

  var tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(function (tabButton) {
    tabButton.classList.remove('activee');
  });

  document.getElementById(tabId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showTab(\'' + tabId + '\')"]');
  clickedButton.classList.add('activee');
}

showTab('tab1');



let navList = document.querySelectorAll(".link-item"),
  totalNavList = navList.length,
  allSections = document.querySelectorAll(".section"),
  totalSection = allSections.length;
for (let i = 0; i < totalNavList; i++) {
  let a = navList[i].querySelector("a");
  a.addEventListener('click', function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    showSection(this);
  })
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.remove("active");
  }
  let target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}


// change title
let navListText = document.querySelectorAll(".text-title"),
  totalNavListText = navListText.length;
for (let i = 0; i < totalNavListText; i++) {
  let a = navListText[i].querySelector("a");
  a.addEventListener('click', function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
      this.classList.add("active");
    }
    let ff = a.innerText;
    document.getElementById("nnn").textContent = ff;
  })
}





// month slider with next and previous buttons
const selectedMonth = document.getElementById("selectedMonth");
const prevButton = document.getElementById("prevMonth");
const nextButton = document.getElementById("nextMonth");

const months = [
  "يناير", "فبراير", "مارس", "أبريل",
  "مايو", "يونيو", "يوليو", "أغسطس",
  "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
];

let currentMonthIndex = 0;

function updateSelectedMonth() {
  selectedMonth.textContent = months[currentMonthIndex];
}

updateSelectedMonth();

prevButton.addEventListener("click", function () {
  currentMonthIndex = (currentMonthIndex - 1 + 12) % 12;
  updateSelectedMonth();
});

nextButton.addEventListener("click", function () {
  currentMonthIndex = (currentMonthIndex + 1) % 12;
  updateSelectedMonth();
});


/* tab button store */
function showTab3(tabAccountId) {
  var tabContents = document.querySelectorAll('.account-content');
  tabContents.forEach(function (tabContent) {
    tabContent.style.display = 'none';
  });

  var tabButtons = document.querySelectorAll('.account-btn');
  tabButtons.forEach(function (tabButton) {
    tabButton.classList.remove('active');
  });

  document.getElementById(tabAccountId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showTab3(\'' + tabAccountId + '\')"]');
  clickedButton.classList.add('active');
}

showTab3('tabAccount1');

//settings page 
function settingShow(settingContentId) {
  var settingsContents = document.querySelectorAll('.settings-content');
  settingsContents.forEach(function (settingsContent) {
    settingsContent.style.display = 'none';
  });

  var settingBtns = document.querySelectorAll('.setting-btn');
  settingBtns.forEach(function (settingBtn) {
    settingBtn.classList.remove('active');
  });

  document.getElementById(settingContentId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="settingShow(\'' + settingContentId + '\')"]');
  clickedButton.classList.add('active');


  if (settingContentId == "settingContent2") {
    document.getElementById("addSettings").style.display = "block";
  } else if (settingContentId == "settingContent1") {
    document.getElementById("addSettings").style.display = "none";
  } else {
    document.getElementById("addSettings").style.display = "block";
  }

}

settingShow('settingContent1');


// account page
const fileImageInput = document.getElementById('fileImageInput');
const uploadedImage = document.getElementById('uploadedImage');

fileImageInput.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
      uploadedImage.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }

});

// add category modal (upload image) page
const fileImageInputAdd = document.getElementById('fileImageInputAdd');
const uploadedImageAdd = document.getElementById('uploadedImageAdd');

fileImageInputAdd.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImageAdd.src = e.target.result;
      uploadedImageAdd.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});
// edit category modal page (upload image) page
const fileImageInputEdit = document.getElementById('fileImageInputEdit');
const uploadedImageEdit = document.getElementById('uploadedImageEdit');

fileImageInputEdit.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImageEdit.src = e.target.result;
      uploadedImageEdit.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});
//  add brand modal  (upload image) page
const fileImageInputAddBrand = document.getElementById('fileImageInputAddBrand');
const uploadedImageAddBrand = document.getElementById('uploadedImageAddBrand');

fileImageInputAddBrand.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImageAddBrand.src = e.target.result;
      uploadedImageAddBrand.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});
//  edit brand modal  (upload image) page
const editBrand = document.getElementById('editBrand');
const imageEditBrand = document.getElementById('imageEditBrand');

editBrand.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imageEditBrand.src = e.target.result;
      imageEditBrand.style.display = 'block'; // Show the uploaded image
    };
    reader.readAsDataURL(file);
  }
});

//orders page 
function showOrder(orderContentId) {
  var orderContents = document.querySelectorAll('.order-content');
  orderContents.forEach(function (orderContent) {
    orderContent.style.display = 'none';
  });

  var orderBtns = document.querySelectorAll('.order-btn');
  orderBtns.forEach(function (orderBtn) {
    orderBtn.classList.remove('active');
  });

  document.getElementById(orderContentId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showOrder(\'' + orderContentId + '\')"]');
  clickedButton.classList.add('active');

}

showOrder('orderContent1');



/* ----- modal order page  ----- */
function openModal() {
  document.getElementById('modal').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
/* ----- modal Add category page  ----- */
function openModalAddCategory() {
  document.getElementById('modalAddCategory').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeModalAddCategory() {
  document.getElementById('modalAddCategory').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
/* ----- modal Add category page  ----- */
function openModelEditCategory() {
  document.getElementById('modalEditCategory').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeModelEditCategory() {
  document.getElementById('modalEditCategory').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}

/* ----- modal Edit Item  page  ----- */
function openEditItem() {
  document.getElementById('modalEditItem').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeEditItem() {
  document.getElementById('modalEditItem').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
/* ----- modal add brand  page  ----- */
function openAddBrand() {
  document.getElementById('modalAddBrand').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeAddBrand() {
  document.getElementById('modalAddBrand').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
/* ----- modal add service  page  ----- */

function openAddService() {
  document.getElementById('modalAddSerice').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeAddService() {
  document.getElementById('modalAddSerice').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}

/* ----- modal edit bouquet  page  ----- */

function openEditBouquet() {
  document.getElementById('modalEditBouquet').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeEditBouquet() {
  document.getElementById('modalEditBouquet').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}

/* ----- modal send message  page  ----- */

function openSendMessage() {
  document.getElementById('modalSendMessage').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeSendMessage() {
  document.getElementById('modalSendMessage').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
/* ----- modal send message  page  ----- */

function openModalCloseAccount() {
  document.getElementById('modalCloseAccount').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeModalCloseAccount() {
  document.getElementById('modalCloseAccount').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
/* ----- modal send message  page  ----- */

function openModalSearch() {
  document.getElementById('modalSearch').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeModalSearch() {
  document.getElementById('modalSearch').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}
/* ----- modal support  page  ----- */

function openModalSupport() {
  document.getElementById('ModalSupport').classList.add('active');
  document.getElementById('overlay').classList.add('active');
}

function closeModalSupport() {
  document.getElementById('ModalSupport').classList.remove('active');
  document.getElementById('overlay').classList.remove('active');
}


/* subscription page */
function showSubsription(subContentId) {
  var subscrContents = document.querySelectorAll('.subscr-content');
  subscrContents.forEach(function (subscrContent) {
    subscrContent.style.display = 'none';
  });

  var subscriptionBtns = document.querySelectorAll('.subscription-btn');
  subscriptionBtns.forEach(function (subscriptionBtn) {
    subscriptionBtn.classList.remove('active');
  });

  document.getElementById(subContentId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showSubsription(\'' + subContentId + '\')"]');
  clickedButton.classList.add('active');

}

showSubsription('subContent1');



/* customer page */
function showCustomer(customerContentId) {
  var tabContentCustomers = document.querySelectorAll('.tab-content-customer');
  tabContentCustomers.forEach(function (tabContentCustomer) {
    tabContentCustomer.style.display = 'none';
  });

  var customerBtns = document.querySelectorAll('.customer-btn');
  customerBtns.forEach(function (customerBtn) {
    customerBtn.classList.remove('active');
  });

  document.getElementById(customerContentId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showCustomer(\'' + customerContentId + '\')"]');
  clickedButton.classList.add('active');
}

showCustomer('customerContent1');


/* customer indiviual */
let lists = document.querySelectorAll(".list-li"),
  totalLists = lists.length,
  Sections = document.querySelectorAll(".user-section"),
  totalSections = Sections.length;
for (let a = 0; a < totalLists; a++) {
  let v = lists[a].querySelector("a");
  v.addEventListener('click', function () {
    for (let j = 0; j < totalLists; j++) {
      lists[j].querySelector("a").classList.remove("active");
    }
    showSection2(this);
  })
}
function showSection2(element) {
  for (let i = 0; i < totalSections; i++) {
    Sections[i].classList.remove("active");

  }
  let target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
/* ----------------------------------- customer business ------------------------------------ */
let listsBusiness = document.querySelectorAll(".list-li-business"),
  totalListsBusiness = listsBusiness.length,
  SectionsBusiness = document.querySelectorAll(".user-section-business"),
  totalSectionsBusiness = SectionsBusiness.length;
for (let a = 0; a < totalListsBusiness; a++) {
  let v = listsBusiness[a].querySelector("a");
  v.addEventListener('click', function () {
    for (let j = 0; j < totalListsBusiness; j++) {
      listsBusiness[j].querySelector("a").classList.remove("active");
    }
    showSection3(this);
  })
}
function showSection3(element) {
  for (let i = 0; i < totalSectionsBusiness; i++) {
    SectionsBusiness[i].classList.remove("active");

  }
  let target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

// ------------------------------------------------------
function showPackageBusiness(packageContentBusinessId) {
  var pakageBusinessContents = document.querySelectorAll('.pakage-business-content');
  pakageBusinessContents.forEach(function (pakageBusinessContent) {
    pakageBusinessContent.style.display = 'none';
  });

  var packageBusinessBtns = document.querySelectorAll('.package-business-btn');
  packageBusinessBtns.forEach(function (packageBusinessBtn) {
    packageBusinessBtn.classList.remove('active');
  });

  document.getElementById(packageContentBusinessId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showPackageBusiness(\'' + packageContentBusinessId + '\')"]');
  clickedButton.classList.add('active');
}

showPackageBusiness('packageContentBusiness1');

// ------------------------------------------------------
function showPackage(packageContentId) {
  var pakageContents = document.querySelectorAll('.pakage-content');
  pakageContents.forEach(function (pakageContent) {
    pakageContent.style.display = 'none';
  });

  var packageBtns = document.querySelectorAll('.package-btn');
  packageBtns.forEach(function (packageBtn) {
    packageBtn.classList.remove('active');
  });

  document.getElementById(packageContentId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showPackage(\'' + packageContentId + '\')"]');
  clickedButton.classList.add('active');
}

showPackage('packageContent1');







function showFinance(financeContentId) {
  var financeContents = document.querySelectorAll('.finance-content');
  financeContents.forEach(function (financeContent) {
    financeContent.style.display = 'none';
  });

  var financeBtns = document.querySelectorAll('.finance-btn');
  financeBtns.forEach(function (financeBtn) {
    financeBtn.classList.remove('active');
  });

  document.getElementById(financeContentId).style.display = 'block';

  var clickedButton = document.querySelector('[onclick="showFinance(\'' + financeContentId + '\')"]');
  clickedButton.classList.add('active');
}
showFinance('financeContent1');



/* drag and drop */
const dropArea = document.getElementById('drop-area');
const MyfileInput = document.getElementById('myfileInput');
const fileList = document.getElementById('file-list');

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('highlight');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('highlight');
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('highlight');
    const files = e.dataTransfer.files;
    handleFiles(files);
});

MyfileInput.addEventListener('change', () => {
    const files = MyfileInput.files;
    handleFiles(files);
});

function handleFiles(files) {
    fileList.innerHTML = '';
    for (const file of files) {
        const listItem = document.createElement('li');
        listItem.textContent = `${file.name} - ${formatBytes(file.size)}`;
        fileList.appendChild(listItem);
    }
}
function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left',
    autoApply: true

  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});


// progress circle

document.addEventListener("DOMContentLoaded", function () {
  const progressCircles = document.querySelectorAll('.progress-circle');

  progressCircles.forEach(circle => {
      const widthheight= circle.getAttribute("size")+"px";
      circle.style.width = widthheight;
      circle.style.height = widthheight;
      const size = circle.getAttribute("size");
      const r = (size-10)/2;
      const circleElementr = circle.querySelector('.progress-circle-bar');

      circleElementr.setAttribute("r", r);
      const percentage = circle.getAttribute('data-percentage');
      const radius = circleElementr.getAttribute("r");
      const circumference = 2 * Math.PI * radius;

      const offset = circumference - (percentage / 100 * circumference);
      const circleElement = circle.querySelector('.progress-circle-bar');
      circleElement.style.strokeDasharray = `${circumference} ${circumference}`;
      circleElement.style.strokeDashoffset = offset;
      const textElement = circle.querySelector('.progress-circle-text');
      textElement.style.fontSize = size / 4 +"px";
      textElement.textContent = `${percentage}%`;
  });
});


// ----------------------


//----------------------------
var optionOne = {
  "annotations": {},
  "chart": {
      "animations": {
          "enabled": true
      },
      "background": "",
      "foreColor": "#333",
      "fontFamily": "droid",
      "height": 300,
      "id": "U9rBP",
      "stacked": true,
      "toolbar": {
          "show": false,
          "tools": {
              "selection": true,
              "zoom": true,
              "zoomin": true,
              "zoomout": true,
              "pan": true,
              "reset": true
          }
      },
      "type": "area",
      "width": '100%'
  },
  "plotOptions": {
      "bar": {
          "borderRadius": 10,
          "borderRadiusApplication": "end",
          "borderRadiusWhenStacked": "last",
          "hideZeroBarsWhenGrouped": false,
          "isDumbbell": false,
          "isFunnel": false,
          "isFunnel3d": true,
          "dataLabels": {
              "total": {
                  "enabled": false,
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                      "color": "#373d3f",
                      "fontSize": "14px",
                      "fontWeight": 600
                  }
              }
          }
      },
      "bubble": {
          "zScaling": true
      },
      "treemap": {
          "dataLabels": {
              "format": "scale"
          }
      },
      "radialBar": {
          "hollow": {
              "background": "#fff"
          },
          "dataLabels": {
              "name": {},
              "value": {},
              "total": {}
          }
      },
      "pie": {
          "donut": {
              "labels": {
                  "name": {},
                  "value": {},
                  "total": {}
              }
          }
      }
  },
  "dataLabels": {
      "enabled": false,
      "style": {
          "fontWeight": 700
      }
  },
  "fill": {
      "type": "gradient",
      "gradient": {
          "type": "vertical",
          "gradientToColors": [
              "#0A7FEB"
          ],
          "opacityFrom": 0.5,
          "colorStops": [
              {
                  "opacity": 0.2,
                  "offset": 0,
                  "color": "#60A5EF"
              },
              {
                  "opacity": 0.5,
                  "offset": 100,
                  "color": "#FFFFFF"
              }
          ]
      }
  },
  "grid": {
      "padding": {
          "right": 36,
          "left": 4
      }
  },
  "legend": {
      "position": "top",
      "fontSize": 15,
      "offsetY": 0,
      "itemMargin": {
          "vertical": 0
      }
  },
  "markers": {
      "hover": {
          "size": 0,
          "sizeOffset": 6
      }
  },
  "series": [
      {
          "name": "Area 1",
          "data": [
              {
                  "x": "يناير",
                  "y": "0"
              },
              {
                  "x": "فبراير",
                  "y": "40"
              },
              {
                  "x": "مارس",
                  "y": "80"
              },
              {
                  "x": "أبريل",
                  "y": "40"
              },
              {
                  "x": "مايو",
                  "y": "60"
              },
              {
                  "x": "يونيو",
                  "y": "0"
              }
          ]
      }
  ],
  "stroke": {
      "width": 2,
      "colors": [
          "#1165BF"
      ],
      "fill": {
          "type": "solid",
          "opacity": 0.85,
          "gradient": {
              "shade": "light",
              "type": "vertical",
              "shadeIntensity": 0.5,
              "inverseColors": false,
              "opacityFrom": 0.65,
              "opacityTo": 0.5,
              "stops": [
                  0,
                  100,
                  100
              ],
              "colorStops": []
          }
      }
  },
  "xaxis": {
      "labels": {
          "trim": true,
          "style": {
              "fontSize": 14
          },
          "offsetX": 4
      },
      "group": {
          "groups": [],
          "style": {
              "colors": [],
              "fontSize": "12px",
              "fontWeight": 400,
              "cssClass": ""
          }
      },
      "tickAmount": "dataPoints",
      "title": {
          "style": {
              "fontWeight": 700
          }
      }
  },
  "yaxis": {
      "opposite": false,
      "tickAmount": 5,
      "labels": {
          "style": {},
          "offsetX": -10,
      },
      "title": {
          "style": {
              "fontWeight": 700
          }
      }
  },
  "theme": {
      "palette": "palette4"
  }
}
var chart1= new ApexCharts(document.querySelector("#chartOne"), optionOne);

chart1.render();
// ---------------------------

var optionTwo= {
  "annotations": {},
  "chart": {
      "animations": {
          "enabled": true
      },
      "background": "",
      "foreColor": "#333",
      "fontFamily": "droid",
      "height": 300,
      "id": "U9rBP",
      "stacked": true,
      "toolbar": {
          "show": false,
          "tools": {
              "selection": true,
              "zoom": true,
              "zoomin": true,
              "zoomout": true,
              "pan": true,
              "reset": true
          }
      },
      "type": "area",
      "width": '100%'
  },
  "plotOptions": {
      "bar": {
          "borderRadius": 10,
          "borderRadiusApplication": "end",
          "borderRadiusWhenStacked": "last",
          "hideZeroBarsWhenGrouped": false,
          "isDumbbell": false,
          "isFunnel": false,
          "isFunnel3d": true,
          "dataLabels": {
              "total": {
                  "enabled": false,
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                      "color": "#373d3f",
                      "fontSize": "14px",
                      "fontWeight": 600
                  }
              }
          }
      },
      "bubble": {
          "zScaling": true
      },
      "treemap": {
          "dataLabels": {
              "format": "scale"
          }
      },
      "radialBar": {
          "hollow": {
              "background": "#fff"
          },
          "dataLabels": {
              "name": {},
              "value": {},
              "total": {}
          }
      },
      "pie": {
          "donut": {
              "labels": {
                  "name": {},
                  "value": {},
                  "total": {}
              }
          }
      }
  },
  "dataLabels": {
      "enabled": false,
      "style": {
          "fontWeight": 700
      }
  },
  "fill": {
      "type": "gradient",
      "gradient": {
          "type": "vertical",
          "gradientToColors": [
              "#0A7FEB"
          ],
          "opacityFrom": 0.5,
          "colorStops": [
              {
                  "opacity": 0.2,
                  "offset": 0,
                  "color": "#60A5EF"
              },
              {
                  "opacity": 0.5,
                  "offset": 100,
                  "color": "#FFFFFF"
              }
          ]
      }
  },
  "grid": {
      "padding": {
          "right": 36,
          "left": 4
      }
  },
  "legend": {
      "position": "top",
      "fontSize": 15,
      "offsetY": 0,
      "itemMargin": {
          "vertical": 0
      }
  },
  "markers": {
      "hover": {
          "size": 0,
          "sizeOffset": 6
      }
  },
  "series": [
      {
          "name": "Area 1",
          "data": [
              {
                  "x": "يناير",
                  "y": "0"
              },
              {
                  "x": "فبراير",
                  "y": "40"
              },
              {
                  "x": "مارس",
                  "y": "80"
              },
              {
                  "x": "أبريل",
                  "y": "40"
              },
              {
                  "x": "مايو",
                  "y": "60"
              },
              {
                  "x": "يونيو",
                  "y": "0"
              }
          ]
      }
  ],
  "stroke": {
      "width": 2,
      "colors": [
          "#1165BF"
      ],
      "fill": {
          "type": "solid",
          "opacity": 0.85,
          "gradient": {
              "shade": "light",
              "type": "vertical",
              "shadeIntensity": 0.5,
              "inverseColors": false,
              "opacityFrom": 0.65,
              "opacityTo": 0.5,
              "stops": [
                  0,
                  100,
                  100
              ],
              "colorStops": []
          }
      }
  },
  "xaxis": {
      "labels": {
          "trim": true,
          "style": {
              "fontSize": 14
          },
          "offsetX": 4
      },
      "group": {
          "groups": [],
          "style": {
              "colors": [],
              "fontSize": "12px",
              "fontWeight": 400,
              "cssClass": ""
          }
      },
      "tickAmount": "dataPoints",
      "title": {
          "style": {
              "fontWeight": 700
          }
      }
  },
  "yaxis": {
      "opposite": false,
      "tickAmount": 5,
      "labels": {
          "style": {},
          "offsetX": -10,
      },
      "title": {
          "style": {
              "fontWeight": 700
          }
      }
  },
  "theme": {
      "palette": "palette4"
  }
}
var chart2= new ApexCharts(document.querySelector("#chartTwo"), optionOne);

chart2.render();
// ---------------------------

//--------------------------------

var optionThree = {
  "annotations": {},
  "chart": {
      "animations": {
          "enabled": true
      },
      "background": "",
      "foreColor": "#333",
      "fontFamily": "droid",
      "height": 400,
      "id": "U9rBP",
      "stacked": true,
      "toolbar": {
          "show": false,
          "tools": {
              "selection": true,
              "zoom": true,
              "zoomin": true,
              "zoomout": true,
              "pan": true,
              "reset": true
          }
      },
      "type": "area",
      "width": '100%'
  },
  "plotOptions": {
      "bar": {
          "borderRadius": 10,
          "borderRadiusApplication": "end",
          "borderRadiusWhenStacked": "last",
          "hideZeroBarsWhenGrouped": false,
          "isDumbbell": false,
          "isFunnel": false,
          "isFunnel3d": true,
          "dataLabels": {
              "total": {
                  "enabled": false,
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                      "color": "#626878",
                      "fontSize": "16px",
                      "fontWeight": 600
                  }
              }
          }
      },
      "bubble": {
          "zScaling": true
      },
      "treemap": {
          "dataLabels": {
              "format": "scale"
          }
      },
      "radialBar": {
          "hollow": {
              "background": "#fff"
          },
          "dataLabels": {
              "name": {},
              "value": {},
              "total": {}
          }
      },
      "pie": {
          "donut": {
              "labels": {
                  "name": {},
                  "value": {},
                  "total": {}
              }
          }
      }
  },
  "dataLabels": {
      "enabled": false,
      "style": {
          "fontWeight": 700
      }
  },
  "fill": {
      "type": "gradient",
      "gradient": {
          "type": "vertical",
          "gradientToColors": [
              "#0A7FEB"
          ],
          "opacityFrom": 0.5,
          "colorStops": [
              {
                  "opacity": 0.2,
                  "offset": 0,
                  "color": "#60A5EF"
              },
              {
                  "opacity": 0.5,
                  "offset": 100,
                  "color": "#FFFFFF"
              }
          ]
      }
  },
  "grid": {
      "padding": {
          "right": 36,
          "left": 15
      }
  },
  "legend": {
      "fontSize": 15,
      "offsetY": 0,
      "itemMargin": {
          "vertical": 0
      }
  },
  "markers": {
      "hover": {
          "sizeOffset": 6
      }
  },
  "series": [
      {
          "name": "Area 1",
          "data": [
              {
                  "x": "السبت",
                  "y": "0"
              },
              {
                  "x": "الأحد",
                  "y": "4"
              },
              {
                  "x": "الاثنين",
                  "y": "8"
              },
              {
                  "x": "الثلاثاء",
                  "y": "4"
              },
              {
                  "x": "الأربعاء",
                  "y": "6"
              },
              {
                  "x": "الخميس",
                  "y": "0"
              }
          ]
      }
  ],
  "stroke": {
      "width": 2,
      "colors": [
          "#1165BF"
      ],
      "fill": {
          "type": "solid",
          "opacity": 0.85,
          "gradient": {
              "shade": "light",
              "type": "vertical",
              "shadeIntensity": 0.5,
              "inverseColors": false,
              "opacityFrom": 0.65,
              "opacityTo": 0.5,
              "stops": [
                  0,
                  100,
                  100
              ],
              "colorStops": []
          }
      }
  },
  "xaxis": {
      "labels": {
          "trim": true,
          "style": {}
      },
      "group": {
          "groups": [],
          "style": {
              "colors": [],
              "fontSize": "16px",
              "fontWeight": 400,
              "cssClass": ""
          }
      },
      "tickAmount": "dataPoints",
      "title": {
          "style": {
              "fontWeight": 700
          }
      }
  },
  "yaxis": {
      "tickAmount": 5,
      "labels": {
          "style": {}
      },
      "title": {
          "style": {
              "fontWeight": 700
          }
      }
  },
  "theme": {
      "palette": "palette4"
  }
}

var chart3= new ApexCharts(document.querySelector("#chart3"), optionThree);

chart3.render();

flatpickr("#period2", {
  dateFormat: "Y-m-d", 
});

flatpickr("#period", {
  dateFormat: "Y-m-d", 
});

flatpickr("#period3", {
  dateFormat: "Y-m-d", 
});



