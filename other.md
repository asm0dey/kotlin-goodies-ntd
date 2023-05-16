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
transition: fadeout
# use UnoCSS
css: unocss
colorSchema: 'dark'
background: black
---

# PySpark <simple-icons-apachespark/> for Python developers

Pasha Finkelshteyn

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
layout: statement
---

# You don't need data engineering skills

<v-click>

## Until you do

</v-click>

---

# What skills <uil-confused/> ?

- Data modelling
- Data architecture
- Building data pipelines
- Handling large amounts of data
- JVM
- Debugging
- SQL

---
layout: cover
background: stop.png
---


# Did you notice I didn't mention BIG DATA?

<v-click>

## Because it's irrelevant (here)

</v-click>

---

# PySpark allows us to work with big data

### Like it's small data, and

- Distributed
- Seamless
- With DataFrames

---

# Data frames?

1. distributed collection of data organized into named columns
2. immutable data structure (can't DML, can DDL)
3. filtering, grouping, joining, and aggregating data

Like this (© ChatGPT)

| id  | name      | age | salary |
| --- | --------- | --- | ------ |
| 1   | John Doe  | 32  | 50000  |
| 2   | Jane Smith| 27  | 75000  |
| 3   | Bob Johnson| 45 | 100000 |
| 4   | Lisa Brown| 23  | 40000  |

---

# Actually, it's not only data frames

## It's also distributed computation engine

But dataframes make it one of the most popular tools for distributed data processing

1. Connect to multiple data sources
2. Join them like they are the same
3. Build execution plan
4. Execute it in (hopefully) most optimal way

Used at <simple-icons-google/><simple-icons-amazon/><simple-icons-jetbrains/> and **many** others

---
layout: image-right

# the image source
image: ignition.png
---

# Why do you need it?

#### One day you will need to…

- Join data from database and HTTP API?
- Collect data from multiple sources and analyze it?
- Write a custome function that you can't call inside you SQL query?
- Handle _**BIG DATA**_ (who knows who knows)

<p class="text-right text-sm">Spark ignites big data --></p>

---

# Today's sample

- https://movielens.org/
- User tags, ratings, etc
- Relevance scores
- Data until 2018th :(

---
layout: cover
background: tv.png
---

# What is the most popular genre of movies?

---
layout: statement
---

# Demo time

Pasha, switch to PyCharm please

---

# Summary

PySpark allows

- Join data from different sources
- Process data in parallel
- Work with data in a uniform way

---
layout: cover
background: monk.png
---

# Thank you!

## Time for questions!

<div class="text-left">
<p><ph-twitter-logo-fill/> asm0di0</p>
<p><mdi-mastodon/> @asm0dey@fosstodon.org</p>
<p><ph-envelope-simple-open-fill/> me@asm0dey.site</p>
<p><ph-twitch-logo-fill/> https://jb.gg/twitch</p>
<p><ph-github-logo-fill/><ph-instagram-logo-fill/><ph-linkedin-logo-fill/><ph-telegram-logo-fill/> asm0dey</p>
<p><ph-globe-duotone/><a href="https://linktr.ee/asm0dey">https://linktr.ee/asm0dey</a></p>
</div>