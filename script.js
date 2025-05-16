let isArabic = false;

function toggleLanguage() {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const downloadPC = document.getElementById("downloadPC");
  const downloadMobile = document.getElementById("downloadMobile");
  const langToggle = document.querySelector(".lang-toggle");

  if (!isArabic) {
    // Arabic
    document.documentElement.lang = "ar";
    title.textContent = "🚀 سوبر دوبر";
    description.textContent = "مرحبًا بك في لعبتي الجديدة! استعد لأكشن رهيب ومغامرات مشوقة!";
    downloadPC.textContent = "تحميل للكمبيوتر";
    downloadMobile.textContent = "تحميل للموبايل";
    langToggle.textContent = "EN";
  } else {
    // English
    document.documentElement.lang = "en";
    title.textContent = "🚀 Super Duper";
    description.textContent = "Welcome to my new game! Get ready for epic action and exciting adventures!";
    downloadPC.textContent = "Download for PC";
    downloadMobile.textContent = "Download for Mobile";
    langToggle.textContent = "AR";
  }

  isArabic = !isArabic;
}
