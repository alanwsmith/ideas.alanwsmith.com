import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ideas For Programming Projects</title>
        <meta
          name="description"
          content="A colleciton of ideas for programming projects."
        />
      </Head>

      <main>
        <p>Looking for ideas for programming projects?</p>

        <p>Here&apos;s a few to get you started:</p>
        <pre>
          - A "this page intentionally left blank" site with random fonts,
          colors, etc... - site with a random subject with a bunch of random
          photos of it (e.g. a giant spoon) - some type of lorem ipsum generator
          (e.g. with music terms) - A set of example data for different things
          (states, movies and directors and actors)h in different formats (csv,
          json, etc...) - Something with a music api
          (https://developer.spotify.com/documentation/web-api/ or
          https://musicbrainz.org/doc/MusicBrainz_API) - generative art like the
          stuff from https://georgefrancis.dev/ - do something with remotion:
          https://www.remotion.dev/ - A collection of gifs/webps that do
          something cool together? - single page site with something like
          'd-e-f-i-n-t-l-y.com' (maybe acronym vs abbreviatin) - color samples
          from movies showing tone of frames (e.g. get the main color from every
          frame and output them in an image where each pixel is represented by
          the color of the frame) - pull all frames from a movie and make them
          small thumnails - pull thumbnails from frames of a movie and display
          them individually at random points of the page instead of showing them
          as a video. - One of those things where you make a picture out of
          smaller images using movie thumbnails - some type of random generators
          (random color for example, maybe a random bar graph) - Something D3 -
          a spinning photo of some type (like rotate it with some type of css of
          js, maybe multiple ones on the page?) - something with the konami code
          where it shows three characters to start and when you type it in it
          goes to 30. - Audio clips from speek-and-spell - one of those games
          with the paper thing with four pyramids that you put your fingers in
          and write letters and numbers on them and then close and open them and
          then lift a flap to see whatever's written there. - pick a random
          character and fill the window with it in a random order (this is one
          of the first things I did on my grandfather's TI-99/4A) - space
          invaders or some other type of game (seems aggressive for a day, but
          maybe?) - tic-tac-toe - display a clock but instead of time show a
          corresponding ksuid - A collection of javascript tools for text
          formatting (e.g. alphabetize a list, convert an unordered list to an
          ordered on and vice verse) - font book that shows fonts (pulls them
          automatically form google fonts as a dynamic load) - color pallet
          examples for frameworks like tailwind - 3d example of the default
          colors in a terminal (3js?) - some type of weather conditions/forecast
          site - random tik toc from favorites list - display a random quote
          from collection - stats on twitter followers (e.g. graph the number of
          followers each person who follows you has) - make a tetris clone -
          make a minesweeper clone - make a space invaders clone - make a shoots
          and ladders clones - make a clone of basically any game out there -
          plot word frequencies for podcasts based on their transcripts - build
          a website with only a single file - word stats from pages/sites that
          have RSS feeds (to make it easier to get the data) - stats on metadata
          from your photos (e.g what month do you take the most photos in) - a
          bubble pop site like: https://bubblespop.netlify.app/ - coin flip page
          - all work and no play makes jack a dull boy set to music -
          minesweeper - matrix style green text animated page - one of those
          matching faces games where there's a grid of tiles turned over an you
          pick two to try to match them, but use animated gifs - count-down
          timer to the next alabama game kick-off - "is alabama playing today?"
          page with simple yes/no - Something like:
          http://www.hasthelargehadroncolliderdestroyedtheworldyet.com/ that
          never changes. - Something with census data (e.g. make graphs of age
          distribution per state in D3) - graph of the number of national
          championships across different football teams and coaches - Is it
          Friday yet single page site with yes/no. Could do something with time
          zones, (e.g it's 'mostly' friday if most timezones are in the day and
          'barely, but not for you' when your timezone isn't but the
          international date line hasn't been hit) - Days left in the year -
          Days until various dates (holidays and vacations) - Sound board with
          some random sounds - single site page with a single gif on it -
          something like http://corndog.io/ - random name generator (pulled from
          list of most popular names from different)
        </pre>
        <p>
          Incidentally, I'm planning to do a speed run of building 30 sites in
          30 days. These are the things I'm considering for the projects. I
          don't have the energy after a 9-to-5 day. So, it'll have to wait until
          I can take a month off or I retire. While some are out of scope for a
          one-day-build, most could probably be pulled off at a working
          prototype level.
        </p>
      </main>

      <footer></footer>
    </div>
  )
}
