import React from 'react'
import ThemeContext from '../contexts/ThemeContext'

import {combineStyles} from '../utils/common'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBus,
  faCoins,
  faDice,
} from '@fortawesome/free-solid-svg-icons'

import {
  faReply
} from '@fortawesome/fontawesome-svg-core'

import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

function FormTest(props){
  const {active_style} = React.useContext(ThemeContext)

  return(
    <section className={active_style.section} id="form">
    <h1 className={active_style.title}> Form </h1>
    <hr />
    <div className={active_style.columns}>
      <div className={active_style.column}>
        <div className={active_style.field}>
          <label className={active_style.label}>Name</label>
          <p className={active_style.control}>
            <input className={active_style.input} type="text" placeholder="Text input" />
          </p>
        </div>
        <div className={active_style.field}>
          <label className={active_style.label}>Username</label>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft, active_style.hasIconsRight])}>
            <input className={combineStyles([active_style.input, active_style.isSuccess])} type="text" placeholder="Text input" defaultValue="bulma" />
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faUser])} />
            </span>
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isRight])}>
              <i className={combineStyles([active_style.fa, active_style.faCheck])} />
            </span>
          </p>
          <p className={combineStyles([active_style.help, active_style.isSuccess])}>This username is available</p>
        </div>
        <div className={active_style.field}>
          <label className={active_style.label}>Email</label>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft, active_style.hasIconsRight])}>
            <input className={combineStyles([active_style.input, active_style.isDanger])} type="text" placeholder="Email input" defaultValue="hello@" />
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
            </span>
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isRight])}>
              <i className={combineStyles([active_style.fa, active_style.faWarning])} />
            </span>
          </p>
          <p className={combineStyles([active_style.help, active_style.isDanger])}>This email is invalid</p>
        </div>
        <div className={active_style.field}>
          <label className={active_style.label}>Subject</label>
          <p className={active_style.control}>
            <span className={active_style.select}>
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <label className={active_style.label}>Files to join</label>
          <p className={active_style.control}>
            <span className={combineStyles([active_style.select, active_style.isMultiple])}>
              <select multiple>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <label className={active_style.label}>Message</label>
          <p className={active_style.control}>
            <textarea className={active_style.textarea} placeholder="Textarea" defaultValue={""} />
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <label className={active_style.checkbox}>
              <input type="checkbox" /> I agree to the
              <a href="#">terms and conditions</a>
            </label>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <label className={active_style.radio}>
              <input type="radio" name="question" /> Yes
            </label>
            <label className={active_style.radio}>
              <input type="radio" name="question" /> No
            </label>
          </p>
        </div>
        <div className={combineStyles([active_style.field, active_style.isGrouped])}>
          <p className={active_style.control}>
            <button className={combineStyles([active_style.button, active_style.isPrimary])}>Submit</button>
          </p>
          <p className={active_style.control}>
            <button className={combineStyles([active_style.button, active_style.isLink])}>Cancel</button>
          </p>
        </div>
        <br />
        <h4 className={active_style.subtitle}> Disabled </h4>
        <hr />
        <div className={active_style.field}>
          <p className={active_style.control}>
            <input className={active_style.input} disabled placeholder="Disabled input" type="text" />
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <textarea className={active_style.textarea} disabled placeholder="Disabled textarea" defaultValue={" "} />
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <label className={combineStyles([active_style.checkbox, active_style.isDisabled])}>
              <input disabled type="checkbox" /> Remember me
            </label>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <label className={combineStyles([active_style.radio, active_style.isDisabled])}>
              <input disabled name="question" type="radio" /> Yes
            </label>
            <label className={combineStyles([active_style.radio, active_style.isDisabled])}>
              <input disabled name="question" type="radio" /> No
            </label>
          </p>
        </div>
        <div className={combineStyles([active_style.field, active_style.isGrouped])}>
          <p className={active_style.control}>
            <button className={combineStyles([active_style.button, active_style.isPrimary])} disabled> Submit </button>
          </p>
          <p className={active_style.control}>
            <button className={active_style.button} disabled> Cancel </button>
          </p>
        </div>
        <br />
        <h3 className={active_style.title}> Horizontal Form </h3>
        <hr />
        <div className={combineStyles([active_style.field, active_style.isHorizontal])}>
          <div className={combineStyles([active_style.fieldLabel, active_style.isNormal])}>
            <label className={active_style.label}>From</label>
          </div>
          <div className={active_style.fieldBody}>
            <div className={combineStyles([active_style.field, active_style.isGrouped])}>
              <p className={combineStyles([active_style.control, active_style.isExpanded, active_style.hasIconsLeft])}>
                <input className={active_style.input} type="text" placeholder="Name" />
                <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isLeft])}>
                  <i className={combineStyles([active_style.fa, active_style.faUser])} />
                </span>
              </p>
            </div>
            <div className={active_style.field}>
              <p className={combineStyles([active_style.control, active_style.isExpanded, active_style.hasIconsLeft, active_style.hasIconsRight])}>
                <input className={combineStyles([active_style.input, active_style.isSuccess])} type="email" placeholder="Email" defaultValue="alex@smith.com" />
                <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isLeft])}>
                  <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
                </span>
                <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isRight])}>
                  <i className={combineStyles([active_style.fa, active_style.faCheck])} />
                </span>
              </p>
              <p className={combineStyles([active_style.help, active_style.isSuccess])}>This email is correct</p>
            </div>
          </div>
        </div>
        <div className={combineStyles([active_style.field, active_style.isHorizontal])}>
          <div className={combineStyles([active_style.fieldLabel, active_style.isNormal])}>
            <label className={active_style.label}>Department</label>
          </div>
          <div className={active_style.fieldBody}>
            <div className={combineStyles([active_style.field, active_style.isNarrow])}>
              <div className={active_style.control}>
                <div className={combineStyles([active_style.select, active_style.isFullwidth])}>
                  <select>
                    <option>Business development</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={combineStyles([active_style.field, active_style.isHorizontal])}>
          <div className={combineStyles([active_style.fieldLabel, active_style.isNormal])}>
            <label className={active_style.label}>Skills</label>
          </div>
          <div className={active_style.fieldBody}>
            <p className={active_style.control}>
              <span className={combineStyles([active_style.select, active_style.isMultiple])}>
                <select multiple>
                  <option>Science computer</option>
                  <option>Development</option>
                  <option>Management</option>
                  <option>Relationship</option>
                </select>
              </span>
            </p>
          </div>
        </div>
        <div className={combineStyles([active_style.field, active_style.isHorizontal])}>
          <div className={active_style.fieldLabel}>
            <label className={active_style.label}>Already a member?</label>
          </div>
          <div className={active_style.fieldBody}>
            <div className={combineStyles([active_style.field, active_style.isNarrow])}>
              <div className={active_style.control}>
                <label className={active_style.radio}>
                  <input type="radio" name="member" /> Yes
                </label>
                <label className={active_style.radio}>
                  <input type="radio" name="member" /> No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={combineStyles([active_style.field, active_style.isHorizontal])}>
          <div className={combineStyles([active_style.fieldLabel, active_style.isNormal])}>
            <label className={active_style.label}>Subject</label>
          </div>
          <div className={active_style.fieldBody}>
            <div className={active_style.field}>
              <div className={active_style.control}>
                <input className={combineStyles([active_style.input, active_style.isDanger])} type="text" placeholder="e.g. Partnership opportunity" />
              </div>
              <p className={combineStyles([active_style.help, active_style.isDanger])}>
                This field is required
              </p>
            </div>
          </div>
        </div>
        <div className={combineStyles([active_style.field, active_style.isHorizontal])}>
          <div className={combineStyles([active_style.fieldLabel, active_style.isNormal])}>
            <label className={active_style.label}>Question</label>
          </div>
          <div className={active_style.fieldBody}>
            <div className={active_style.field}>
              <div className={active_style.control}>
                <textarea className={active_style.textarea} placeholder="Explain how we can help you" defaultValue={""} />
              </div>
            </div>
          </div>
        </div>
        <div className={combineStyles([active_style.field, active_style.isHorizontal])}>
          <div className={active_style.fieldLabel}>
            {/* Left empty for spacing */}
          </div>
          <div className={active_style.fieldBody}>
            <div className={active_style.field}>
              <div className={active_style.control}>
                <button className={combineStyles([active_style.button, active_style.isPrimary])}>
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 className={active_style.title}>File</h3>
        <hr />
        <div className={active_style.field}>
          <div className={active_style.file}>
            <label className={active_style.fileLabel}>
              <input className={active_style.fileInput} type="file" name="resume" />
              <span className={active_style.fileCta}>
                <span className={active_style.fileIcon}>
                  <i className={combineStyles([active_style.fa, active_style.faUpload])} />
                </span>
                <span className={active_style.fileLabel}>
                  Choose a file…
                </span>
              </span>
            </label>
          </div>
        </div>
        <div className={active_style.field}>
          <div className={combineStyles([active_style.file, active_style.hasName])}>
            <label className={active_style.fileLabel}>
              <input className={active_style.fileInput} type="file" name="resume" />
              <span className={active_style.fileCta}>
                <span className={active_style.fileIcon}>
                  <i className={combineStyles([active_style.fa, active_style.faUpload])} />
                </span>
                <span className={active_style.fileLabel}>
                  Choose a file…
                </span>
              </span>
              <span className={active_style.fileName}>
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
        <div className={active_style.field}>
          <div className={combineStyles([active_style.file, active_style.isPrimary])}>
            <label className={active_style.fileLabel}>
              <input className={active_style.fileInput} type="file" name="resume" />
              <span className={active_style.fileCta}>
                <span className={active_style.fileIcon}>
                  <i className={combineStyles([active_style.fa, active_style.faUpload])} />
                </span>
                <span className={active_style.fileLabel}>
                  Primary file…
                </span>
              </span>
            </label>
          </div>
        </div>
        <div className={active_style.field}>
          <div className={combineStyles([active_style.file, active_style.isInfo, active_style.hasName])}>
            <label className={active_style.fileLabel}>
              <input className={active_style.fileInput} type="file" name="resume" />
              <span className={active_style.fileCta}>
                <span className={active_style.fileIcon}>
                  <i className={combineStyles([active_style.fa, active_style.faUpload])} />
                </span>
                <span className={active_style.fileLabel}>
                  Info file…
                </span>
              </span>
              <span className={active_style.fileName}>
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
        <div className={active_style.field}>
          <div className={combineStyles([active_style.file, active_style.isWarning, active_style.isBoxed])}>
            <label className={active_style.fileLabel}>
              <input className={active_style.fileInput} type="file" name="resume" />
              <span className={active_style.fileCta}>
                <span className={active_style.fileIcon}>
                  <i className={combineStyles([active_style.fa, active_style.faCloudUploadAlt])} />
                </span>
                <span className={active_style.fileLabel}>
                  Warning file…
                </span>
              </span>
            </label>
          </div>
        </div>
        <div className={active_style.field}>
          <div className={combineStyles([active_style.file, active_style.isDanger, active_style.hasName, active_style.isBoxed])}>
            <label className={active_style.fileLabel}>
              <input className={active_style.fileInput} type="file" name="resume" />
              <span className={active_style.fileCta}>
                <span className={active_style.fileIcon}>
                  <i className={combineStyles([active_style.fa, active_style.faCloudUploadAlt])} />
                </span>
                <span className={active_style.fileLabel}>
                  Danger file…
                </span>
              </span>
              <span className={active_style.fileName}>
                Screen Shot 2017-07-29 at 15.54.25.png
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className={active_style.column}>
        <br />
        <h3 className={active_style.subtitle}> Styles </h3>
        <hr />
        <div className={active_style.field}>
          <p className={active_style.control}>
            <input className={combineStyles([active_style.input, active_style.isRounded])} type="text" placeholder="Rounded input" />
          </p>
        </div>
        <br />
        <h3 className={active_style.subtitle}> Colors </h3>
        <hr />
        <div className={active_style.field}>
          <p className={active_style.control}>
            <input className={combineStyles([active_style.input, active_style.isPrimary])} type="text" placeholder="Primary input" />
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <input className={combineStyles([active_style.input, active_style.isInfo])} type="text" placeholder="Info input" />
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <input className={combineStyles([active_style.input, active_style.isSuccess])} type="text" placeholder="Success input" />
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <input className={combineStyles([active_style.input, active_style.isWarning])} type="text" placeholder="Warning input" />
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <input className={combineStyles([active_style.input, active_style.isDanger])} type="text" placeholder="Danger input" />
          </p>
        </div>
        <br />
        <h3 className={active_style.subtitle}> Sizes </h3>
        <hr />
        <div className={active_style.field}>
          <p className={active_style.control}>
            <input className={combineStyles([active_style.input, active_style.isSmall])} type="text" placeholder="Small input" />
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <input className={active_style.input} type="text" placeholder="Normal input" />
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <input className={combineStyles([active_style.input, active_style.isMedium])} type="text" placeholder="Medium input" />
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <input className={combineStyles([active_style.input, active_style.isLarge])} type="text" placeholder="Large input" />
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <span className={combineStyles([active_style.select, active_style.isSmall])}>
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <span className={active_style.select}>
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <span className={combineStyles([active_style.select, active_style.isMedium])}>
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <span className={combineStyles([active_style.select, active_style.isLarge])}>
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <label className={combineStyles([active_style.label, active_style.isSmall])}>Small input</label>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft, active_style.hasIconsRight])}>
            <input className={combineStyles([active_style.input, active_style.isSmall])} type="email" placeholder="Email" />
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
            </span>
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isRight])}>
              <i className={combineStyles([active_style.fa, active_style.faCheck])} />
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <label className={active_style.label}>Normal input</label>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft, active_style.hasIconsRight])}>
            <input className={active_style.input} type="email" placeholder="Email" />
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
            </span>
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isRight])}>
              <i className={combineStyles([active_style.fa, active_style.faCheck])} />
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft, active_style.hasIconsRight])}>
            <input className={active_style.input} type="email" placeholder="Email" />
            <span className={combineStyles([active_style.icon, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
            </span>
            <span className={combineStyles([active_style.icon, active_style.isRight])}>
              <i className={combineStyles([active_style.fa, active_style.faCheck])} />
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <label className={combineStyles([active_style.label, active_style.isMedium])}>Medium input</label>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft, active_style.hasIconsRight])}>
            <input className={combineStyles([active_style.input, active_style.isMedium])} type="email" placeholder="Email" />
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
            </span>
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isRight])}>
              <i className={combineStyles([active_style.fa, active_style.faCheck])} />
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft, active_style.hasIconsRight])}>
            <input className={combineStyles([active_style.input, active_style.isMedium])} type="email" placeholder="Email" />
            <span className={combineStyles([active_style.icon, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
            </span>
            <span className={combineStyles([active_style.icon, active_style.isRight])}>
              <i className={combineStyles([active_style.fa, active_style.faCheck])} />
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft, active_style.hasIconsRight])}>
            <input className={combineStyles([active_style.input, active_style.isMedium])} type="email" placeholder="Email" />
            <span className={combineStyles([active_style.icon, active_style.isMedium, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
            </span>
            <span className={combineStyles([active_style.icon, active_style.isMedium, active_style.isRight])}>
              <i className={combineStyles([active_style.fa, active_style.faCheck])} />
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <label className={combineStyles([active_style.label, active_style.isLarge])}>Large input</label>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft, active_style.hasIconsRight])}>
            <input className={combineStyles([active_style.input, active_style.isLarge])} type="email" placeholder="Email" />
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
            </span>
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isRight])}>
              <i className={combineStyles([active_style.fa, active_style.faCheck])} />
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft, active_style.hasIconsRight])}>
            <input className={combineStyles([active_style.input, active_style.isLarge])} type="email" placeholder="Email" />
            <span className={combineStyles([active_style.icon, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
            </span>
            <span className={combineStyles([active_style.icon, active_style.isRight])}>
              <i className={combineStyles([active_style.fa, active_style.faCheck])} />
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft, active_style.hasIconsRight])}>
            <input className={combineStyles([active_style.input, active_style.isLarge])} type="email" placeholder="Email" />
            <span className={combineStyles([active_style.icon, active_style.isMedium, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
            </span>
            <span className={combineStyles([active_style.icon, active_style.isMedium, active_style.isRight])}>
              <i className={combineStyles([active_style.fa, active_style.faCheck])} />
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft, active_style.hasIconsRight])}>
            <input className={combineStyles([active_style.input, active_style.isLarge])} type="email" placeholder="Email" />
            <span className={combineStyles([active_style.icon, active_style.isLarge, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
            </span>
            <span className={combineStyles([active_style.icon, active_style.isLarge, active_style.isRight])}>
              <i className={combineStyles([active_style.fa, active_style.faCheck])} />
            </span>
          </p>
        </div>
        <br />
        <h4 className={active_style.subtitle}> With Font Awesome icons </h4>
        <hr />
        <div className={active_style.field}>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft])}>
            <input className={active_style.input} type="email" placeholder="Email" />
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faEnvelope])} />
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={combineStyles([active_style.control, active_style.hasIconsLeft])}>
            <input className={active_style.input} type="password" placeholder="Password" />
            <span className={combineStyles([active_style.icon, active_style.isSmall, active_style.isLeft])}>
              <i className={combineStyles([active_style.fa, active_style.faLock])} />
            </span>
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <button className={combineStyles([active_style.button, active_style.isSuccess])}>
              Login
            </button>
          </p>
        </div>
        <br />
        <h3 className={active_style.title}> Form addons </h3>
        <hr />
        <div className={combineStyles([active_style.field, active_style.hasAddons])}>
          <p className={active_style.control}>
            <input className={active_style.input} type="text" placeholder="Find a repository" />
          </p>
          <p className={active_style.control}>
            <a className={combineStyles([active_style.button, active_style.isInfo])}>
              Search
            </a>
          </p>
        </div>
        <div className={combineStyles([active_style.field, active_style.hasAddons])}>
          <p className={active_style.control}>
            <input className={combineStyles([active_style.input, active_style.isLarge])} type="text" placeholder="Find a repository" />
          </p>
          <p className={active_style.control}>
            <a className={combineStyles([active_style.button, active_style.isInfo, active_style.isLarge])}>
              Search
            </a>
          </p>
        </div>
        <div className={combineStyles([active_style.field, active_style.hasAddons])}>
          <p className={active_style.control}>
            <span className={active_style.select}>
              <select>
                <option>$</option>
                <option>£</option>
                <option>€</option>
              </select>
            </span>
          </p>
          <p className={active_style.control}>
            <input className={active_style.input} type="text" placeholder="Amount of money" />
          </p>
          <p className={active_style.control}>
            <a className={active_style.button}>
              Transfer
            </a>
          </p>
        </div>
        <div className={combineStyles([active_style.field, active_style.hasAddons])}>
          <p className={active_style.control}>
            <span className={active_style.select}>
              <select>
                <option>$</option>
                <option>£</option>
                <option>€</option>
              </select>
            </span>
          </p>
          <p className={combineStyles([active_style.control, active_style.isExpanded])}>
            <input className={active_style.input} type="text" placeholder="Amount of money" />
          </p>
          <p className={active_style.control}>
            <a className={active_style.button}>
              Transfer
            </a>
          </p>
        </div>
        <div className={combineStyles([active_style.field, active_style.hasAddons])}>
          <p className={combineStyles([active_style.control, active_style.isExpanded])}>
            <span className={combineStyles([active_style.select, active_style.isFullwidth])}>
              <select name="country">
                <option value="Argentina">Argentina</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Brazil">Brazil</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Guyana">Guyana</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Suriname">Suriname</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </span>
          </p>
          <p className={active_style.control}>
            <button type="submit" className={combineStyles([active_style.button, active_style.isPrimary])}>Choose</button>
          </p>
        </div>
        <div className={combineStyles([active_style.field, active_style.isGrouped])}>
          <p className={combineStyles([active_style.control, active_style.isExpanded])}>
            <input className={active_style.input} type="text" placeholder="Find a repository" />
          </p>
          <p className={active_style.control}>
            <a className={combineStyles([active_style.button, active_style.isInfo])}>
              Search
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
  )

}

export default FormTest