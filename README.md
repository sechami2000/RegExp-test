# 정규표현식

정규식, Regular Expression

## 역할

-문자 검색
-문자 대체
-문자 추출

## 테스트 사이트

http://regexr.com/

## 정규식 생성

```js
//생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

//리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자

```js
const str = `
010-1234-5677
sechami2000@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부 boolean 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체해서 새로운 문자열 반환(원본 수정 아님)

## 플래그(옵션)

플래그 | 설명
--|--
g | 일치하는 모든 문자(global)
i | 영어 대소문자 구분 안함(ignore case)
m | 여러 줄로 돼있는 문자열을 통으로 보는 게 아니라, 각각의 줄을 확인(multi line)

## 패턴

 패턴 | 설명
 --|--
 ^ab | line 시작에 있는 ab와 일치
 ab$ | line 끝에 있는 ab와 일치
 . | 임의의 한 문자와 일치
 a&verbar;b | a 또는 b와 일치
 ab? | b가 없거나 b와 일치
 a{3} | a가 3개 연속 일치
 a{3,} | a가 3개 이상 연속 일치
 a{3,5} | a가 3개 이상 5개 이하 연속 일치
 [abc] | a또는 b또는 c
 [a-z] | 영어 소문자 중 하나
 [A-Z] | 영어 대문자 중 하나
 [0-9] | 숫자 중 하나
 [가-힣] | 한글 중 하나
 \w | 문자 숫자 _ 에 일치
 \b | \w가 아닌 모든 것
 \d | 숫자
 \s | 공백문자
 (?=) | 앞쪽 일치(lookahead)
 (?<=) | 뒤쪽 일치(lookbehind)
