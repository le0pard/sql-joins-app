<svelte:options immutable="{true}" />

<div id="sqlJoinsInformation" class="visualizer-block">
  <div class="visualizer-block-child">
    <div class="row">
      <div class="small-12 medium-6 large-6 columns">
        <div class="row">
          <div class="svg-control small-12 medium-12 large-12 columns">
            <svg
              version="1.1"
              id="sqlJoinControlSvg"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="332.609px"
              height="198.913px"
              viewBox="0 0 332.609 198.913"
              enable-background="new 0 0 332.609 198.913"
              xml:space="preserve"
            >
              <g id="mainLayer">
                <path
                  fill="#3A3B3B"
                  d="M100.736,194.11c-52.499,0-95.21-42.394-95.21-94.5s42.711-94.5,95.21-94.5 c22.376,0,44.062,7.863,61.197,22.166c-19.975,18.744-31.408,45.041-31.408,72.334c0,27.293,11.433,53.59,31.408,72.334 C144.799,186.247,123.113,194.11,100.736,194.11"
                  id="leftCircle"
                  style="fill:#3a3a3a;fill-opacity:1.0000000;stroke:#ffffff;stroke-width:2.0000000;stroke-miterlimit:4.0000000;stroke-dasharray:none;stroke-opacity:1.0000000"
                ></path>
                <path
                  fill="#3A3B3B"
                  d="M165.735,168.593c-19.211-17.847-30.21-42.937-30.21-68.984c0-26.048,10.999-51.136,30.21-68.984 c19.21,17.848,30.208,42.937,30.208,68.984S184.946,150.745,165.735,168.593"
                  id="intersectOfCircle"
                  style="fill:#3a3a3a;fill-opacity:1.0000000;stroke:#ffffff;stroke-width:2.0000000;stroke-miterlimit:4.0000000;stroke-dasharray:none;stroke-opacity:1.0000000"
                ></path>
                <path
                  fill="#3A3B3B"
                  d="M230.735,194.11c-22.378,0-44.063-7.863-61.199-22.166c19.976-18.744,31.408-45.041,31.408-72.334 c0-27.293-11.433-53.59-31.408-72.334c17.136-14.303,38.821-22.166,61.199-22.166c52.498,0,95.208,42.393,95.208,94.5 S283.233,194.11,230.735,194.11"
                  id="rightCircle"
                  style="fill:#3a3a3a;fill-opacity:1.0000000;stroke:#ffffff;stroke-width:2.0000000;stroke-miterlimit:4.0000000;stroke-dasharray:none;stroke-opacity:1.0000000"
                ></path>
                <text
                  id="leftCircleText"
                  x="80"
                  y="112"
                  fill="#ffffff"
                  font-size="30"
                  font-family="'Roboto Slab', serif">A</text
                >
                <text
                  id="rightCircleText"
                  x="230"
                  y="112"
                  fill="#ffffff"
                  font-size="30"
                  font-family="'Roboto Slab', serif">B</text
                >
              </g>
            </svg>
          </div>
        </div>

        <div class="row">
          <div class="small-12 medium-12 large-10 large-centered columns">
            <p class="sql_description explain-text">
              Please select how do you want to do SQL JOIN between two table
            </p>
          </div>
        </div>
      </div>

      <div class="small-12 medium-6 large-6 columns">
        <div class="sql-result-block row">
          <div class="small-12 medium-12 large-12 columns">
            <pre><code id="clipboardSqlCode" class="sql_info language-sql hljs"></code></pre>
          </div>
          <div class="large-offset-8 large-4 medium-offset-8 medium-4 columns show-for-medium-up">
            <div class="copy-button-block">
              <button class="copy_button disabled" data-clipboard-text="" title="Click to copy sql"
                >Copy SQL</button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
