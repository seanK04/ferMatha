# A Musical Series
In my first blog, I wanted to share a simple yet interesting observation that I have found. 

Consider a series that begins with a quarter note, followed by an eighth note, then a sixteenth note, and continues in this pattern indefinitely. If this sequence of notes were to extend infinitely, what would be the total duration of the series?
![Alt text](https://i.ibb.co/bv2Ly5V/Screenshot-2024-06-10-at-3-02-06-PM.png "center, 600px, 200px")

This sequence of notes practically mimics the well known infinite geometric series:
$$
    1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8}\cdots
$$ 
which converges to 2. Therefore, we can easily see that the duration of the notes is equivalent to a half note!

***

Below is a stricter line of reasoning:

Suppose we label the duration of the quarter note as $t$.

An eighth note would then have a duration of $\frac{t}{2}$.

A sixteenth note would have a duration of $\frac{t}{4}$, and so forth.

This sequence forms a geometric series with a common ratio of $r = \frac{1}{2}$.

We can express the total duration of the series as such:
$$
t + \frac{t}{2} + \frac{t}{4} + \frac{t}{8} + \cdots = \sum_{n=0}^{\infty} \frac{t}{2^n}
$$

To find the sum of this infinite geometric series, we use the formula for the sum of an infinite geometric series $\sum_{n=0}^{\infty} ar^n = \frac{a}{1 - r}$, where $a$ is the first term and $r$ is the common ratio.

Here, $a = t$ and $r = \frac{1}{2}$. Thus, the sum $S$ is:


Therefore, the total duration of the musical series converges to:

$$
2t
$$

If $t$ is the duration of a quarter note, $2t$ is the duration of a half note. Hence, the total length of this musical series converges to a half note.
