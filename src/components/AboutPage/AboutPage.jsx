import React from 'react';
import './AboutPage.css';
import '@fontsource/roboto';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  return (
    <>

      <div className='m-[60px]'>
        <p className='mb-[20px] text-[35px]'>About Us:</p>
        <p>
          Welcome to Our Queer HxStory, we are so happy to see you taking some time to explore our site.  Take a minute to look over who and what we are.  We are here with a mission to provide free access to life transforming information for everyone!

          The following information is intended for a broad audience, which includes people of all ages and backgrounds. For more detailed information, please do not hesitate to contact us at adminoqx@ourqueerhxstory.com.
        </p>
      </div>

      <div className='mx-[60px]'>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                fontSize: 35
              }}
            >
              Who are we?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our names are Leonardo Candelario-Perez PhD and Nic G. Rider PhD.  We are the cofounders of OQX.  Between us we have more than 2 decades in the fields of sexual, gender and mental health. We have dedicated our careers to helping people of all walks of life find betterment and wellbeing for themselves and loved ones.  We have now decided to take our passion for empowering marginalized people to a broader level.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                fontSize: 35
              }}
            >
              <p>Dr. Leo</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Hola! I am Leo (Spanish or English pronunciation is fine). I am the originator, Co-founder, and CEO of OQX. I am a licensed clinical psychologist specializing in gender and sexual health working in the Twin Cities Minnesota, I am an adjunct professor for the University of Minnesota and an LGBTQIA+ consultant and educators for several non-profits.  I am from Guaynabo Puerto Rico and a proud queer, Boricua, bi-cultural, bi-lingual, nonbinary, femme person.

              When I am not being Dr. Leo as I am called when I am wearing my work hat, I am usually surrounded by family and friends.  Some have said I have a lot of “mom” energy, which I wear like a badge of honor.  My interests are varied, and I don’t do subtle in any aspect of my life. I love all things nature; thus, I have a problematically large amount of house plants, love fish tanks and aqua scaping, learning about history and science and have a passion for cooking for others.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                fontSize: 35
              }}
            >Dr. Rider</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              TBD
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                fontSize: 35
              }}
            >What is our Queer HxStory?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              At its core OQX is a free to use online resource for the national queer community to have an active role in documenting important events and people that have impacted the lives of marginalized people since 1900.

              OQX revolves around three central, interactive, and searchable living timelines which span the fields of:

              <ol>
                <li>•	Politics & Law</li>
                <li>•	Medicine & Science</li>
                <li>•	Culture & and Business</li>
              </ol>

              We call OQX a living timeline since it is always being verified and updated by us the administrators and by people like you!

              If you are 18 or older and wish to suggest an event, person or just want to share a story about why something is important to you, just register and submit! We will review your information, verify it with other reputable sources and once approved it will be immortalized in one of the three timelines!  You can do this anonymously or can accept to have your name posted.

              All information found in OQX is fact and scientifically checked.

              Information is provided at a 6th grade reading level. With that said this is made to be used by people across the life span and of any educational level.  How you use OQX is up to you.  You can search for fun queer facts, do research on a specific project, or use it as a teaching or advocacy tool for students, clients, or patients.

              You will also find a resources section, where you will be able to see legal and health care resources in your area which have met our queer cultural competency and humility standards of training and practice.

              Currently, we are still in the developing stage of this company.  We have a vision to expand into the fields of research, social media, education, and consultation.  Check the website or follow us on social media for updates on our journey!

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                fontSize: 35
              }}
            >Our Mission:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our mission is simple!

              We seek to provide verified, and fact checked information for free on important events and people in the story of Queer people in the USA and its territories for anyone to use.

              In addition to minimizing barriers to access this information, we seek to highlight and emphasize voices and events which decentralize whiteness and colonialism.

              Finally, we seek to build a greater sense of community within local communities and at a national level by helping people access life changing resources close to them.

              How can you help?

              There are many ways to help!
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* START */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                fontSize: 35
              }}
            >
              {/* TITLE */}
              Where does your information go to?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              OQX will manage any information provided to us with the deepest sense of respect and protection.  Your information safety is central to our cause. We recognize that the Queer community at large has many reasons to be distrusting of systems.  Historically our information has been used in ways that has caused deep harm and pain.

              All information consensually collected by OQX will be used to further an understanding of what queer communities need, generate research to improve health outcomes and change policy for the better and ultimately immortalize our impact on the history of the USA.

              Your information will be collected and saved using the highest ethical and secure process possible.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* END */}



        {/* START */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                fontSize: 35
              }}
            >
              Where does your money go to?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you are in the position to help OQX with financial resources, through any of the forementioned way, the money will go to the following:
              <ol className='mt-4'>
                <li>A.	Covering Startup costs, like licenses, materials, and administrative costs.</li>
                <li>B.	Initially, a large portion of funds will go towards improving the quality and user experience of the Website itself.</li>
                <li>C.	As we deeply believe in fair compensation for people’s time, energy, and intellect, we will use funds to pay consultants and experts we need as we grow.
                </li>
                <li>E.  Lastly, our big goal is to become a B-Corp which is a corporation which meets the highest standards of social and environmental performance, transparency, and accountability.</li>
              </ol>

            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* END */}

        {/* START */}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              sx={{
                fontSize: 35
              }}
            >
              Is OQX a non-profit?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              TBD
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* END */}




      </div>
      
    </>
  );
}

export default AboutPage;
