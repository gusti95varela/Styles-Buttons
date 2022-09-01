const btnButton = document.querySelector('.btn');
const img = document.querySelector('.btnImg');
const btnOutl = document.querySelector('.outline');
const imgOutline = document.querySelector('.btnOutline');
const btnText = document.querySelector('.text');
const imgText = document.querySelector('.btnText');
const buttonShadow = document.querySelector('.disableShadow');
const imgShadow = document.querySelector('.btnShadow');
const buttonDisabled = document.querySelector('.disabled');
const imgDisabled = document.querySelector('.btnDisabled');
const buttonStoreStart = document.querySelector('.localGroceryStoreStart');
const imgStoreStart = document.querySelector('.btnStoreStart');
const buttonStoreEnd = document.querySelector('.localGroceryStoreEnd');
const imgStoreEnd = document.querySelector('.btnStoreEnd');
const buttonSm = document.querySelector('.sm');
const imgSm = document.querySelector('.btnSm');
const buttonMd = document.querySelector('.md');
const imgMd = document.querySelector('.btnMd');
const buttonLg = document.querySelector('.lg');
const imgLg = document.querySelector('.btnLg')
const buttonDefault1 = document.querySelector('.default-1');
const imgDefault1 = document.querySelector('.btnDefault-1');
const buttonPrimary = document.querySelector('.primary');
const imgPrimary = document.querySelector('.btnPrimary');
const buttonSecondary = document.querySelector('.secondary');
const imgSecondary = document.querySelector('.btnSecondary');


btnButton.addEventListener('click', () => {
    img.classList.toggle('active');
});

btnOutl.addEventListener('click', () => {
    imgOutline.classList.toggle('active');
});

btnText.addEventListener('click', () => {
    imgText.classList.toggle('active');
});

buttonShadow.addEventListener('click', () => {
    imgShadow.classList.toggle('active');
});

buttonDisabled.addEventListener('click', () => {
    imgDisabled.classList.toggle('active');
});

buttonStoreStart.addEventListener('click', () => {
    imgStoreStart.classList.toggle('active');
});

buttonStoreEnd.addEventListener('click', () => {
    imgStoreEnd.classList.toggle('active');
});

buttonSm.addEventListener('click', () => {
    imgSm.classList.toggle('active');
});

buttonMd.addEventListener('click', () => {
    imgMd.classList.toggle('active');
});

buttonLg.addEventListener('click', () => {
    imgLg.classList.toggle('active');
});

buttonDefault1.addEventListener('click', () => {
    imgDefault1.classList.toggle('active');
});

buttonPrimary.addEventListener('click', () => {
    imgPrimary.classList.toggle('active')
});

buttonSecondary.addEventListener('click', () => {
    imgSecondary.classList.toggle('active');
});


