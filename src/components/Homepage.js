/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export default function Homepage(props) {
  return (
    <div className={css(styles.group, styles.group_posize)}>
      <div className={css(styles.flexbox, styles.flexbox_posize1)}>
        <div className={css(styles.flexbox_item)}>
          <div className={css(styles.flexbox1, styles.flexbox1_posize)}>
            <div className={css(styles.flexbox1_item)}>
              <div className={css(styles.group1, styles.group1_posize)}>
                <div className={css(styles.txt, styles.txt_posize)}>{'Womentorship'}</div>

                <div className={css(styles.group2, styles.group2_posize)}>
                  <div className={css(styles.flexbox, styles.flexbox_posize)}>
                    <div className={css(styles.flexbox2_item)}>
                      <div className={css(styles.group3, styles.group3_posize)}>
                        <div
                          style={{ '--src': `url(${require('assets/d2bf05e923385ba363d95dcb895c236d.png')})` }}
                          className={css(styles.img, styles.img_posize)}
                        />
                        <div
                          style={{ '--src': `url(${require('assets/4ed03aa394c665bfe118d3aab4980413.png')})` }}
                          className={css(styles.img1, styles.img1_posize)}
                        />
                        <div className={css(styles.txt1, styles.txt1_posize)}>{'Lovelace'}</div>
                      </div>
                    </div>
                    <div className={css(styles.flexbox2_item1)}>
                      <div className={css(styles.txt2, styles.txt2_posize)}>{'Code with confidence'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={css(styles.flexbox1_space)} />
            <div className={css(styles.txt3, styles.txt3_posize)}>{'Internships and Opportunities'}</div>
            <div className={css(styles.flexbox1_space1)} />
            <div className={css(styles.flexbox1_item1)}>
              <div className={css(styles.txt, styles.txt_posize1)}>{'Hackathon Finder'}</div>
            </div>
          </div>
        </div>
        <div className={css(styles.flexbox_item1)}>
          <div className={css(styles.flexbox3, styles.flexbox3_posize)}>
            <div className={css(styles.flexbox3_item)}>
              <div
                style={{ '--src': `url(${require('assets/347e5d82dabc1cde9970faec730e3883.png')})` }}
                className={css(styles.img2, styles.img2_posize)}
              />
            </div>
            <div className={css(styles.flexbox3_space)} />
            <div className={css(styles.flexbox3_item)}>
              <div
                style={{ '--src': `url(${require('assets/347e5d82dabc1cde9970faec730e3883.png')})` }}
                className={css(styles.img3, styles.img3_posize)}
              />
            </div>
            <div className={css(styles.flexbox3_space)} />
            <div className={css(styles.flexbox3_item)}>
              <div
                style={{ '--src': `url(${require('assets/347e5d82dabc1cde9970faec730e3883.png')})` }}
                className={css(styles.img4, styles.img4_posize)}
              />
            </div>
          </div>
        </div>
        <div className={css(styles.flexbox_item2)}>
          <div className={css(styles.group4, styles.group4_posize)}>
            <div className={css(styles.txt5, styles.txt5_posize)}>{'Built with 💜 and 💻'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Homepage.inStorybook = true;

const styles = StyleSheet.create({
  group: { display: 'flex', backgroundColor: 'rgb(255,255,255)' },
  group_posize: { position: 'relative', minHeight: 1024, flexGrow: 1, margin: 0 },
  flexbox: { display: 'flex', flexDirection: 'column' },
  flexbox_posize1: { position: 'relative', flexGrow: 1, margin: '353px 0px 0px' },
  flexbox_item: { display: 'flex', flex: '0 1 84px' },
  flexbox1: { display: 'flex' },
  flexbox1_posize: { position: 'relative', flexGrow: 1, margin: '0px 118px 16px 174px' },
  flexbox1_item: { display: 'flex', flex: '0 1 200px' },
  group1: { display: 'flex' },
  group1_posize: { position: 'relative', height: 34, flexGrow: 1, margin: '18px 0px 16px' },
  txt: { font: '30px/1.2 Georgia, Helvetica, Arial, serif', color: 'rgb(0,0,0)', letterSpacing: '0' },
  txt_posize: { position: 'relative', display: 'block', width: 'fit-content', margin: '0px auto' },
  group2: { display: 'flex' },
  group2_posize: {
    position: 'absolute',
    top: '-371px',
    height: 281,
    width: 1441,
    left: '-175px',
    right: '-1066px',
    margin: '0px auto'
  },
  flexbox_posize: { position: 'relative', flexGrow: 1, margin: '23px 8px 54px 1060px' },
  flexbox2_item: { display: 'flex', flex: '0 1 164.04px' },
  group3: { display: 'flex' },
  group3_posize: { position: 'relative', height: 117.49, flexGrow: 1, margin: '0px 0px 47px' },
  img: { background: 'var(--src) center center / cover no-repeat' },
  img_posize: {
    position: 'absolute',
    top: '-23.276275634765625px',
    height: 357.82,
    width: 1441,
    left: '-1060px',
    right: '-8px',
    margin: '0px auto'
  },
  img1: { background: 'var(--src) center center / cover no-repeat', borderRadius: '34px 34px 34px 34px' },
  img1_posize: { position: 'absolute', top: '-12.157562255859375px', height: 294.14, left: '-1033px', width: 305 },
  txt1: { font: '87px/1.2 Georgia, Helvetica, Arial, serif', color: 'rgb(0,0,0)', letterSpacing: '0' },
  txt1_posize: { position: 'relative', display: 'block', width: 'fit-content', margin: '0px auto' },
  flexbox2_item1: { display: 'flex', flex: '0 0 auto' },
  txt2: { font: '30px/1.2 Georgia, Helvetica, Arial, serif', color: 'rgb(136,93,166)', letterSpacing: '0' },
  txt2_posize: { position: 'relative', width: 'fit-content', margin: '0px 0px 0px 45px' },
  flexbox1_space: { display: 'flex', flex: '1 1 223px' },
  txt3: {
    display: 'flex',
    justifyContent: 'center',
    font: '30px/1.2 Georgia, Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
    letterSpacing: '0',
    margin: 0,
    flex: '0 0 auto'
  },
  txt3_posize: { position: 'relative', width: 293, minWidth: 293, margin: 0 },
  flexbox1_space1: { display: 'flex', flex: '0 1 190px' },
  flexbox1_item1: { display: 'flex', flex: '0 0 auto' },
  txt_posize1: { position: 'relative', display: 'block', width: 'fit-content', margin: '18px auto 16px' },
  flexbox_item1: { display: 'flex', flex: '0 1 526px' },
  flexbox3: { display: 'flex' },
  flexbox3_posize: { position: 'relative', flexGrow: 1, margin: '0px 41px 104px 88px' },
  flexbox3_item: { display: 'flex', flex: '0 1 383px' },
  img2: { background: 'var(--src) center center / cover no-repeat', borderRadius: '10px 10px 10px 10px' },
  img2_posize: { position: 'relative', height: 422, flexGrow: 1, margin: 0 },
  flexbox3_space: { display: 'flex', flex: '1 1 81px' },
  img3: { background: 'var(--src) center center / cover no-repeat', borderRadius: '10px 10px 10px 10px' },
  img3_posize: { position: 'relative', height: 422, flexGrow: 1, margin: 0 },
  img4: { background: 'var(--src) center center / cover no-repeat', borderRadius: '10px 10px 10px 10px' },
  img4_posize: { position: 'relative', height: 422, flexGrow: 1, margin: 0 },
  flexbox_item2: { display: 'flex', flex: '0 1 61px' },
  group4: { display: 'flex', backgroundColor: 'rgb(201,163,228)' },
  group4_posize: { position: 'relative', minHeight: 61, flexGrow: 1, margin: 0 },
  txt5: { font: '24px/1.2 Georgia, Helvetica, Arial, serif', color: 'rgb(0,0,0)', letterSpacing: '0' },
  txt5_posize: { position: 'relative', display: 'block', width: 'fit-content', margin: '14px auto 20px' }
});
