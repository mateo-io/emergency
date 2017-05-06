import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import PropTypes from 'prop-types';

          /*
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
            >
            <div>
              <h2 style={styles.headline}>Tabs with slide effect</h2>
              Swipe to see the next slide.<br />
            </div>
              <div style={styles.slide}>
                slide n°2
              </div>
              <div style={styles.slide}>
                slide n°3
              </div>
          </SwipeableViews>
          */


      const CallView = ({match}) => (
        <div>
        This call id is {match.url}
        </div>
      )

      export default CallView
