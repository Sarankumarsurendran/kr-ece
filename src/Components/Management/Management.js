import React, {useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import chairman from "../../assets/Managementimg/chairman.png";
import ed from "../../assets/Managementimg/ed.png";
import principal from "../../assets/Managementimg/principal.png";

function ScrollToTopOnMount() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []); 

  return null; 
}

const Management = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="bg-light">
        <div className="englab-banner">
          <h2 className="ab-mg-pl-banner fw-bold">OUR MANAGEMENT</h2>
        </div>
      </div>

      <div className="container">
      <div className="Management-container margintop">
        <div className="row-management">
          <div className="row align-items-center">
            <div className="col-lg-6">
            <img src={chairman} alt="Image 1" className="Management-img" />
            </div>
            <div className="col-lg-6">
            <div className="manageheader-content">
              <h3>Dr.K.Ramakrishnan, Chairman</h3>
              <p>
                Dr. K. Ramakrishnan – Chairman, a vibrant person filled with
                dynamism is a shining and definite role model for the budding
                engineers of this institution. A production Engineer with B.E
                degree from Annamalai University, Tamil Nadu, he was brought up
                with a vision to make this rural pocket as a hub of technocrats.
                His ardent faith in discipline and hard work has been getting
                him success one after the other in all his ventures. He has high
                aims and lofty ideals to secure a worthy place for this college
                amongst the renowned colleges in India and abroad.
              </p>
            </div>
            </div>
          </div>
        </div>
        
        <div className="management-content">
          <p>
            Being an educationist and learned engineer, he founded an
            educational institution at Trichy for providing quality engineering
            education to the students hailing from varied socio – economic and
            cultural backgrounds. Having come from rural background, he educated
            the students from the darkness of ignorance to light more lights and
            to inspire more lives through his vision and perspective.
          </p>
          <p>
            He had been a champion of TIES during his college days. Dr. K.
            Ramakrishnan is one of the three eminent personalities of the Anna
            University study team that visited the Canadian Universities in
            2006. His matchless interest in imparting quality-engineering
            education elevated the college to a prominent position among the
            several engineering colleges in Tamilnadu. Being a sports person, he
            wanted to hone the interest of the students in sports by providing
            state of the art infrastructure facilities in the campus. Thus, he
            has become a role model not only to his administrative staff and
            teaching fraternity but also to his students.
          </p>
        </div>
      </div>
      </div>
      
      {/* <div className="blank-space"></div> */}
      <div className="container">
      <div className="Management-container mt-5 pt-5">
        <div className="row-management">
          <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={ed} alt="Image 1" className="Management-img" />
            </div>
            <div className="col-lg-6">
            <div className="manageheader-content">
              <h3>Dr.S.Kuppusamy, Executive Director</h3>
              <p>
                Dr.S.Kuppusamy took up his career in academics out of his
                passion for the profession and his commitment combined with a
                zeal for success elevated him to this position. He did his
                bachelor’s degree in Electronics at Erode Arts College, Erode
                and Master’s degree in Business Administration at Kongu
                Engineering College, Perundurai and Ph.D. in Management at
                Bharathiar University, Coimbatore.
              </p>
              </div>
              </div>
            </div>          
        </div>
        <div className="management-content">
          <p>
            He has cleared NET and SLET and also he is a qualified auditor for
            ISO Certification. He had a long and successful stint at Kongu Arts
            and Science College, Erode in various capacities starting from
            Lecturer to Professor and Head, Department of Management Studies
            before joining M. Kumarasamy College of Engineering as director for
            MBA/MCA – Standalone Programs and later got elevated as Executive
            Director. He was a member of Board of Studies, Inspection Commission
            for grant of Affiliation and Senate of Bharathiar University,
            Coimbatore.
          </p>
          <p>
            In addition to his academic activities, he offered consultancy
            services for various organizations in ISO Certification process. His
            emotional stability coupled with decision making and leadership
            skills has paved the way for his success in academic administration.
          </p>
        </div>
      </div>
      </div>

      {/* <div className="blank-space"></div> */}
      <div className="container">
      <div className="Management-container mt-5 pt-5">
        <div className="row-management">
          <div className="row align-items-center">
            <div className="col-lg-6">
            <img src={principal} alt="Image 1" className="principal-img" />
            </div>
            <div className="col-lg-6">
            <div className="manageheader-content">
              <h3>Dr.D.Srinivasan, Principal</h3>
              <div className="princi">
                <p>
                  Dr.D.Srinivasan, The Principal of K.Ramakrishnan College of
                  Engineering, Tiruchirappalli, is a vibrant leader with his
                  ground-breaking approach and proven administrative prowess
                  produces many young engineering professionals to this society.
                  He received his Ph.D. and Post-Graduation in Manufacturing
                  Technology from the nation’s top grade institution NIT, Trichy
                  (erstwhile REC). With a great aspiration to serve the students
                  community, he started his academic service in the year 1992 in
                  Shanmugha College of Engineering (presently SASTRA University)
                  where he did his Bachelors in Mechanical Engineering.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="management-content">
          <p>
            {" "}
            As a recipient of the state award for his UG project from
            Directorate of Technical Education, Chennai, he was the key person
            to ascertain curriculum for Mechatronics in UG Course and Logistics
            Management in PG Course. He has also established many laboratories
            by acquiring funds from central agencies and his visit to SWISS
            GERMAN UNIVERSITY (SGU), Indonesia for signing a memorandum of
            understanding (MOU) in the year 2004 made him to get international
            exposure.
          </p>
          <p>
            The ebullient leader has about 25 publications in various reputed
            journals with good impact factor and filed 6 patents to his credit
            as on date. His involvement in attending conferences, workshops,
            short term courses and seminars made him to convene which in turn
            shaped his leadership quality stronger than before. Being a member
            in professional bodies such as IEI, IIW (Indian Institute of
            Welding), ISTE, Society of Automotive Engineers (USA), Computer
            Society of India etc., he holds many other key assignments which
            include assessor in NAAC Peer Committee, member in Board of Studies,
            Academic Council in various Universities and other premier
            institutions and presiding officer of GATE Examinations. He is an
            active reviewer in Springer for “International Journal of Advanced
            Manufacturing Technology” and he acts as Doctoral Committee Member
            for Ph.D., candidates of Anna University, Chennai.He has also
            engaged himself in participating in the “Spiritual World Record
            2021” organized by The World Community Service Centre on 28th March
            2021.
          </p>
          <p>
            As the Principal of the college, he has been the driving force for
            making everything possible which is an eye witness of the numerous
            awards and accolades such as, number one position among Anna
            University, Tiruchirappalli zone colleges in Nov-Dec 2011
            examinations, first rank in Anna University rankings in April-May
            2013 examinations, 10th position in Nov-Dec 2019 examinations among
            443 colleges affiliated to Anna University, Chennai, The Best
            Emerging College of Engineering in India in the year 2015 by The
            Education Post, 19th Rank among top 20 Engineering colleges in India
            with Excellence Industry Exposure in June 2016 by Higher Education
            Review, Anna University’s Dewang Mehta Trust Award, CSR Excellence
            in Education Award and much more. In his tenure, he achieved ISO
            9001: 2015 & ISO 14001:2019 Green campus certification, NAAC
            “A”Grade in 2017,NBA Accreditation for three departments viz
            Electronics and Communication Engineering, Electrical and
            Electronics Engineering and Mechanical Engineering. During his
            stint, besides ARIIA ranking with Band B category (26-50) released
            by MHRD, KRCE has received QS I-GAUGE E-LEAD Certification in the
            year 2021. His strong academic acumen and administrative adroitness
            steer the college to reach a top destination in the field of
            technical education is not faraway.
          </p>
          <h3 className="princi-msg">Message From Principal</h3>
          <p>
            K.Ramakrishnan College of Engineering, Tiruchirappalli has become an
            ideal place for technical education within a short span of time. The
            growth of the institution lies in the performance of the students.
            Institutions should empower the students by developing their skills
            and competency, so that they can fit themselves in the globalized
            market. The prime motto of KRCE “Empower through Education” is
            achieved by providing a inimitable pedagogical approach by the
            committed faculty members and the students by sharing the
            responsibility of both learning and teaching. The college has
            successfully been holding the beacon of learning high in the
            scholastic empyrean and it has been on an assertive journey to
            strengthen the young minds to innovate them with an invincible
            tutelage.
          </p>
          <p>
            Education is not just a process of giving knowledge for a future job
            but a lifelong process which builds an understanding of moral and
            ethical values to guide one’s life in a right path. KRCE not only
            focuses on the academic front, but also helps in the development of
            a student's personality, extra-curricular activities and over all
            perspective. Everything that makes a good institution - well
            equipped R&D Cells, Lab facilities for all the departments, Wi-Fi
            enabled campus, well stacked library with digital facility, career
            guidance, unique teaching methods, training for competitive
            examinations, liberty to think and express themselves – all are
            available to mould the students to face the challenges confidently.
            In the culmination of 12 years of hard work, the institution has
            left no stone unturned in enhancing the pedagogical and
            technological service of its wards.I firmly believe that our
            institution is more than just a place to learn.It provides you a
            chance to grow by equipping with everything you need to achieve
            excellence.I wish all the students for their grand success in their
            career and prosperity.
          </p>
        </div>
      </div>
      </div>
      <div>
        <Footer />
      </div>

      <ScrollToTopOnMount></ScrollToTopOnMount>
    </>
  );
};

export default Management;
