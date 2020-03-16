<template>
  <div id="app2">
     <div id="nav">
      <ul>
      
      <li><router-link to="/">Home</router-link></li> 
      <li><router-link to="/login">Sign&nbsp;up/Login</router-link></li> 
      <li><router-link to="/instruction">Instructor&nbsp;Blog</router-link></li>  
      <li><router-link to="/about">About</router-link></li>
      
     </ul>
    </div>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="../assets/v.png" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>Venu Naredla</strong>
            <br />
            “Things may come to those who wait, but only the things left by
            those who hustle.”
            <br />
            <small><a>Like</a> · <a>Reply</a> · 1 hr</small>
          </p>
        </div>

        <article class="media">
          <figure class="media-left">
            <p class="image is-48x48">
              <img src="../assets/h.png" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Sai Harika Tadi</strong>
                <br />
                “If you want something you’ve never had, you must be willing to
                do something you’ve never done.”
                <br />
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </div>

            <article class="media">
              Lacking motivation to get back into the gym? Back in the gym
              already but feel stagnated? Or maybe you’re just looking for new
              inspiration for a the new year. Whatever your situation, reading
              words of wisdom from successful people can be super-inspiring.
            </article>

            <article class="media">
              With that in mind, here are 20 amazing motivational quotes from
              notable figures to help you kick start your new year — and your
              fitness goals.
            </article>
          </div>
        </article>

        <article class="media">
          <figure class="media-left">
            <p class="image is-48x48">
              <img src="../assets/d.png" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Md Dory Khan </strong>
                <br />
                Some are from sports people, some entrepreneurs, world leaders
                and famous thinkers, but in each of these quotes is something to
                inspire you in your fitness pursuits.
                <br />
                <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
              </p>
            </div>
          </div>
        </article>
      </div>
    </article>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="../assets/nitin.png" />
        </p>
      </figure>
      <div class="media-content">
        <div class="field">
          <p class="control">
            <textarea
              class="textarea"
              placeholder="Add a comment..."
            ></textarea>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button">Post comment</button>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
article {
  font-family: "Roboto", sans-serif;
}

.media {
  position: relative;
  padding-right: 2%;
  padding-top: 3%;
  left: 2%;
}

</style>
