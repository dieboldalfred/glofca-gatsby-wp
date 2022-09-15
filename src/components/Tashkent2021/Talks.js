import React from "react"

// data
import { DayOne, DayTwo, DayThree } from "../../data/tashkent2021"

// components
import { Section, SectionContent } from "../index"

const TalkSection = ({ title, chair, chairs, speakers, points }) => (
  <>
    <h4 className="text__coloured">{title}</h4>
    {chair && (
      <p>
        <a
          href={DayOne.partOne.chair.link}
          target="_blank"
          className="text__italicised"
        >
          {DayOne.partOne.chair.name}
        </a>
        , {DayOne.partOne.chair.desc}
      </p>
    )}
    {chairs && (
      <p>
        Co-chairs:{" "}
        {chairs.map((chair, i) => {
          const { name, desc } = chair
          return (
            <span key={i} className="text__italicised">
              {name}, {desc}
              {", "}
            </span>
          )
        })}
      </p>
    )}
    {speakers &&
      speakers.map((speaker, i) => {
        return (
          <p key={i}>
            <a href={speaker.link} target="_blank" className="text__coloured">
              {speaker.name}
            </a>
            , {speaker.desc}
          </p>
        )
      })}
    {points && (
      <ul className="discs">
        {points.map((point, i) => {
          return (
            <li key={i} className="disc">
              {point}
            </li>
          )
        })}
      </ul>
    )}
  </>
)

const Talks = () => {
  return (
    <Section customClass="purple-bg" title="Talks & Presentations">
      <SectionContent>
        <div className="tashkent-talks">
          <div className="tashkent-talk">
            <TalkSection
              title={DayOne.partOne.title}
              chair={DayOne.partOne.chair}
              speakers={DayOne.partOne.speakers}
            />
            <TalkSection
              title={DayOne.overview.title}
              speakers={DayOne.overview.speakers}
            />
            <TalkSection
              title={DayOne.sessionOne.title}
              chairs={DayOne.sessionOne.chairs}
              speakers={DayOne.sessionOne.speakers}
            />
            <TalkSection
              title={DayOne.sessionTwo.title}
              chairs={DayOne.sessionTwo.chairs}
              speakers={DayOne.sessionTwo.speakers}
            />
            <TalkSection
              title={DayOne.sessionThree.title}
              chairs={DayOne.sessionThree.chairs}
              speakers={DayOne.sessionThree.speakers}
            />
            <TalkSection
              title={DayOne.sessionFour.title}
              chairs={DayOne.sessionFour.chairs}
              speakers={DayOne.sessionFour.speakers}
            />
            <TalkSection
              title={DayOne.sessionFive.title}
              chair={DayOne.sessionFive.chair}
              points={DayOne.sessionFive.points}
            />
            <TalkSection
              title={DayOne.sessionSix.title}
              chair={DayOne.sessionSix.chair}
              speakers={DayOne.sessionSix.speakers}
            />
            <TalkSection
              title={DayOne.sessionSeven.title}
              chair={DayOne.sessionSeven.chair}
            />
          </div>
          <div className="tashkent-talk__sidebar">
            <div className="tashkent-talk">
              <TalkSection
                title={DayTwo.partOne.title}
                chair={DayTwo.partOne.chair}
                points={DayTwo.partOne.points}
              />
              <TalkSection
                title={DayTwo.partTwo.title}
                chair={DayTwo.partTwo.chair}
                points={DayTwo.partTwo.points}
              />
              <TalkSection
                title={DayTwo.partThree.title}
                chair={DayTwo.partThree.chair}
                points={DayTwo.partThree.points}
              />
            </div>
            <div className="tashkent-talk">
              <TalkSection
                title={DayThree.partOne.title}
                chair={DayThree.partOne.chair}
                points={DayThree.partOne.points}
              />
              <TalkSection
                title={DayThree.partTwo.title}
                points={DayThree.partTwo.points}
              />
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  )
}
export default Talks
