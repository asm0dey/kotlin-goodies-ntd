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
image: moshed.webp
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