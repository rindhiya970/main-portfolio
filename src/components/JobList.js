import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component="div">{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component="div">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Smilient: {
      jobTitle: "Software Engineer @",
      duration: "JAN 2026- PRESENT",
      desc: [
        "Designed and implemented a scalable multi-role backend architecture using Node.js, MongoDB, and JWT, enabling secure access for five stakeholder roles.",
        "Developed RESTful APIs and modular backend services for clinic registration, waste collection, pickup tracking, and recycling workflows, improving end-to-end process automation.",
        "Integrated backend services with the React Native application, delivering a secure and maintainable platform that digitizes dental aligner recycling and sustainability tracking."
      ],
    },
    IndiWebPros: {
      jobTitle: "AI/ML Intern @",
      duration: "JUN 2026 – JUL 2026",
      desc: [
        "Developed deep learning and forecasting solutions using LSTM, GRU, ARIMA, Prophet, and Isolation Forest for sequence modeling, anomaly detection, and predictive analytics.",
        "Researched SHAP explainability, covering Shapley values, local and global interpretability, feature importance analysis, and real-world healthcare AI applications.",
        "Managed project documentation and GitHub repository organization, including source code, datasets, README, and team collaboration reports, while being recognized as 'Best Performer of the Week' multiple times."
      ],
    },
    "GAO Group of Companies": {
      jobTitle: "Web Developer Intern @",
      duration: "JAN 2026 – APR 2026",
      desc: [
        "Developed and customized WordPress websites using Elementor and AI-assisted workflows to streamline website creation and content management.",
        "Built responsive landing pages and modern web interfaces using CSS Grid and Flexbox for an optimized user experience.",
        "Maintained version control, documentation, and collaborative deployment workflows using Git.",
      ],
    },
    Sytherin: {
      jobTitle: "Full Stack Developer Intern @",
      duration: "AUG 2025 – OCT 2025",
      desc: [
        "Developed a grid-based matching engine using multidimensional arrays and recursive validation for dynamic game interactions.",
        "Implemented browser-native voice synthesis using the Web Speech API with real-time speech customization.",
        "Built responsive, cross-platform user interfaces from wireframes to production-ready deployment."
      ],
    },
    // "University of Toronto": {
    //   jobTitle: "Research Engineer @",
    //   duration: "MAY 2021 - SEPT 2021",
    //   desc: [
    //     "Developed and researched an NLP-based framework using state-of-the-art tools like Spacy and Stanza to facilitate the derivation of requirements from health data by leveraging syntactic dependencies, entity-recognition and rule-based match-making.",
    //     " Application selected for DCS Research Award ($4,000) as part of the ”Visualizing Privacy Analysis Results” project led by Professor Marsha Chechik."
    //   ]
    // },
    // Centivizer: {
    //   jobTitle: "Software Developer @",
    //   duration: "SEPT 2019 - APR 2020",
    //   desc: [
    //     "Developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
    //     "Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia."
    //   ]
    // },
    // TDSB: {
    //   jobTitle: "Software Engineer @",
    //   duration: "SEPT 2019 - DEC 2020",
    //   desc: [
    //     "Co-developed homework management software integrable with Google Classroom by utilizing the Python’s Flask micro-framework for the back-end API and Vue.js for the front-end UI, in order to translate business requirements into a functional full-stack application."
    //   ]
    // },
    // "Orange Gate": {
    //   jobTitle: "Software Developer Intern @",
    //   duration: "MAY 2019 - AUG 2019",
    //   desc: [
    //     "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sensors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
    //     "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
    //     "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB."
    //   ]
    // }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab key={key} label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel key={key} value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, idx) {
              return (
                <FadeInSection key={idx} delay={`${idx + 1}00ms`}>
                  <li>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
