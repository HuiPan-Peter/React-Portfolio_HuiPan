// Array of languages with their respective texts and flags
let languages = [
  { text: "Hola", flag: "es" },
  { text: "Bonjour", flag: "fr" },
  { text: "こんにちは", flag: "jp" },
  { text: "你好", flag: "cn" },
  { text: "Hallo", flag: "de" },
  { text: "Ciao", flag: "it" },
  { text: "Olá", flag: "pt" },
  { text: "Привет", flag: "ru" },
  { text: "Merhaba", flag: "tr" },
  { text: "안녕하세요", flag: "kr" },
  { text: "नमस्ते", flag: "in" },
  { text: "Xin chào", flag: "vn" },
  { text: "สวัสดี", flag: "th" },
  { text: "Salam", flag: "my" },
  { text: "Kumusta", flag: "ph" },
  { text: "Halo", flag: "id" },
  { text: "ဟယ်လို", flag: "mm" },
  { text: "ជំរាបសួរ", flag: "kh" },
  { text: "Hallo", flag: "de" },
  { text: "Hej", flag: "se" },
  { text: "Hei", flag: "fi" },
];
let index = 0;

// Function to change the language
export function changeLanguage() {
  let language = languages[index];
  document.getElementById("hello").innerHTML = `<span id="flag" class="flag-icon
  flag-icon-${language.flag}"></span> ${language.text}`;
  index = (index + 1) % languages.length;
}

// Export the changeLanguage function
// export { changeLanguage };

//Turn to jsx