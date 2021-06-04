//백틱 기호로 문자열을 쓰면 코드 상 줄바꿈 가능해짐
//줄바꿈 문자도 포함되는 것임. 즉 아래 str의 시작과 끝 문자는 개행문자
const str = `
010-1234-5677
thehami2000@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

//const regexp = new RegExp('the', 'gi')
//const regexp = /fox/gi;
//console.log(regexp.test(str)); //true
// console.log(str.replace(regexp, 'duck'));
// console.log(str);

// const regexp = /\.$/gim
// console.log(str.match(regexp));

// const h = `  the hello  world   !

// `
// console.log(
//   h.replace(/\s/g,'')
// );
console.log(
  str.match(/(?<=@).+/g)
)