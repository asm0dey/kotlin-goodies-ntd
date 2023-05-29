---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# persist drawings in exports and build
drawings:
  persist: false
# page transition
# transition: fade
# use UnoCSS
css: unocss
colorSchema: 'dark'
background: black
---

# Kotlin Goodies for Testing

## Pasha Finkelshteyn, <logos-jetbrains />

---
layout: two-cols
---

# `whoami`

- Developer <emojione-monotone-avocado /> at <logos-jetbrains />
- Average <fa6-brands-python /> enjoyer
- Speaker <ph-microphone-fill /> and streamer <ph-twitch-logo /> ([https://twitch.tv/jetbrains](https://jb.gg/twitch) or [<ph-twitch-logo />.<gg-tv />/<logos-jetbrains />](https://jb.gg/twitch))
- Data engineer

::right::

![](/avatar.jpg)

---
layout: image
image: glitched-slide.webp
---


---
layout: statement
---

# All programming activities have one common trait

## They require testing!

---
layout: center
---

# In this talk I'm trying to tell about good autotests. With <logos-kotlin-icon />

---

# How test in Java usually look?

```java {all|1|2-6|5|7-11|10|12-16|15}
class MyVeryImportantTest {
    @Test
    void feature_should_work_somehow(){
       /*snip*/ 
       assert
    }
    @Test
    void feature_should_work_somehow2(){
       /*snip*/ 
       assert
    }
    @Test
    void feature_should_work_somehow3(){
       /*snip*/ 
       assert
    }
}
```

Many, many times!

---
layout: image
image: world.jpg
---

## The Flat World

---

# But we wanna beauty!

```kotlin {all|1|2|3|4|6|7|8}
passwordService {
    shouldHash {
        length { /* snip */ }
        salt { /* snip  */ }
    }
    shouldCheck {
        validPasswords()
        invalidPasswords()
    }   
}
```

---

# Parametrized tests? Python

```python {all|1|1,2}
@pytest.mark.parametrize("test_input,expected", [("3+5", 8), ("2+4", 6), ("6*9", 42)])
def test_eval(test_input, expected):
    assert eval(test_input) == expected
```

`test_input,expected`, really?

---

# Parametrized tests? Java

```java {all|7-10|8|1-6}
static Stream<Arguments> stringIntAndListProvider() {
    return Stream.of(
        arguments("apple", 1, Arrays.asList("a", "b")),
        arguments("lemon", 2, Arrays.asList("x", "y"))
    );
} 
@ParameterizedTest
@MethodSource("stringIntAndListProvider")
void testWithMultiArgMethodSource(String str, 
    int num, List<String> list) {/* snip */}
```

`stringIntAndListProvider`, really?

---

# Parametrized tests? Kotlin (with kotest)

```kotlin
fun isPythagTriple(a: Int, b: Int, c: Int): Boolean = a * a + b * b == c * c

// snip…

withData(
  Triple(3, 4, 5),
  Triple(6, 8, 10),
  Triple(8, 15, 17),
  Triple(7, 24, 25)
) { (a, b, c) ->
  isPythagTriple(a, b, c) shouldBe true
}
```

---
layout: image
image: confused.png
---

# What if
# I need to test things I don't know I need to test?

<style>
h1 {
    color: white !important;
    text-align: center;

}
</style>

---
clicks: 5
---

# Never write your own hashing (unless…)

```kotlin {all|1|2-4|6|all}
withData(
    "love",
    "secret",
    "god", // Who will remember the reference?
) { input ->
    MD5.compute(input) shouldBe libMd5(input)
}
```
<p v-click="4">Launching…</p>
<div v-click="5">

1. <openmoji-check-mark/> love
1. <openmoji-check-mark/> secret
1. <openmoji-check-mark/> god

</div>

---
layout: image
image: lens.png
---


# Time to investigate!

<style>
h1 {
    color: white !important;
    text-align: center;
}
</style>


---

# Property tests!

## To test things we can not even _imagine_

```kotlin {all|1|2|3|4|6|8|9}
checkAll(
    Arb.string(
        codepoints = Arb.of(
            (Char.MIN_VALUE.code..Char.MAX_VALUE.code).map(::Codepoint)
        ),
        range = 0..52
    )
) { input ->
    MD5.compute(input) shouldBe libMd5(input)
}
```

---
layout: image
image: explode.png
---

---

# Error!

```txt {all|1|3|5}
Property test failed for inputs

0) "꽪Ԉ㴨啣នഄ騿挋③ꩶ괖✷⃮㴧砑琶㋉뇛寵嚱땒箂醉℉ꫴ짥Ẩ鼏콋鹗맼㯖Ở㑾ᜫ綦講뼞仦ꄁ黺鄙ᾓ㤫川陝泴"

Caused by io.kotest.assertions.AssertionFailedError: expected:<"90b23a970ed1b799850a24140ae8ad39"> but was:<"5a430f76b3d544a13bf4b80710a174a0"> at
```

Wow, it was a complex sample!

But there is more…

---

# Error!

```txt {all|1|2|3|4|5|6|7|8|9}
Attempting to shrink arg "꽪Ԉ㴨啣នഄ騿挋③ꩶ괖✷⃮㴧砑琶㋉뇛寵嚱땒箂醉℉ꫴ짥Ẩ鼏콋鹗맼㯖Ở㑾ᜫ綦講뼞仦ꄁ黺鄙ᾓ㤫川陝泴"
Shrink #1: "꽪Ԉ㴨啣នഄ騿挋③ꩶ괖✷⃮㴧砑琶㋉뇛寵嚱땒箂醉℉" fail
Shrink #2: "꽪Ԉ㴨啣នഄ騿挋③ꩶ괖✷" fail
Shrink #3: "꽪Ԉ㴨啣នഄ" fail
Shrink #4: "꽪Ԉ㴨" fail
Shrink #5: "꽪Ԉ" fail
Shrink #6: "꽪" fail
Shrink #7: <empty string> pass
Shrink result (after 7 shrinks) => "꽪"
```

And there is more!

---

# Error!

```txt {all|1|3|5}
Property failed after 1 attempts

	Arg 0: "꽪" (shrunk from 꽪Ԉ㴨啣នഄ騿挋③ꩶ괖✷⃮㴧砑琶㋉뇛寵嚱땒箂醉℉ꫴ짥Ẩ鼏콋鹗맼㯖Ở㑾ᜫ綦講뼞仦ꄁ黺鄙ᾓ㤫川陝泴)

Repeat this test by using seed 4919313423746630853
```

---

# Repeat? Yes!

```kotlin {all|1,2}
checkAll(
    PropTestConfig(seed = 4919313423746630853),
    Arb.string(
        codepoints = Arb.of(
            ('a'.code..Char.MAX_HIGH_SURROGATE.code)
                .map(::Codepoint)
        ),
    )
) { input ->
    MD5.compute(input) shouldBe libMd5(input)
}
```

- reproduce the test **exactly** like in the failed instance
- debug it
- fix it
- PROFIT!!

---
