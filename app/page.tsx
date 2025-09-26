import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Section
        header="What is Pneumonia?"
        text={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side: text */}
            <div>
              <p>
                Pneumonia is an acute respiratory infection that affects the
                lungs, causing inflammation of the air sacs <em>(alveoli)</em>.
                These air sacs may fill with fluid or pus, leading to symptoms
                such as <strong>cough, fever, chills, chest pain,</strong> and{" "}
                <strong>difficulty breathing</strong>.
              </p>
              <p className="mt-4">
                The condition can be caused by bacteria, viruses, or fungi, and
                it ranges in severity from mild to life-threatening,
                particularly for infants, older adults, and individuals with
                weakened immune systems. Pneumonia remains a leading cause of
                morbidity and mortality worldwide, making early diagnosis and
                treatment crucial.
              </p>
            </div>

            {/* Right side: image */}
            <div className="flex justify-center">
              <Image
                src="/pneumonia.jpg"
                width={500}
                height={500}
                alt="Illustration of pneumonia in the lungs"
              />
            </div>
          </div>
        }
        link="https://www.who.int/news-room/fact-sheets/detail/pneumonia"
      />
      <Section
        header="About Pneumonia Diagnosis"
        text={
          <>
            Diagnosing pneumonia typically involves a combination of{" "}
            <strong>
              clinical evaluation, physical examination, and diagnostic tests
            </strong>
            . Doctors begin by reviewing a patient’s symptoms such as cough,
            fever, chest discomfort, and difficulty breathing. During a physical
            exam, abnormal breathing sounds may be detected using a stethoscope.
            <br />
            <br />
            To confirm the diagnosis, imaging tests such as a{" "}
            <em>chest X-ray</em> or <em>CT scan</em> are commonly used to
            identify lung inflammation and distinguish pneumonia from other
            respiratory conditions. Additional tests like blood cultures, sputum
            analysis, and pulse oximetry may also be performed to determine the
            underlying cause and assess the severity. Accurate diagnosis is
            critical, as it guides the choice of treatment and improves patient
            outcomes.
          </>
        }
        link="https://www.cdc.gov/pneumonia/diagnosis-treatment/index.html"
      />
      <Section
        header="Benefits of Expert System in Pneumonia Diagnosis"
        text={
          <>
            <p>
              Expert systems bring significant advantages to pneumonia diagnosis
              by providing{" "}
              <strong>consistent, evidence-based decision support</strong> for
              healthcare professionals. They can analyze patient data, symptoms,
              and test results quickly, reducing the chances of human error and
              improving diagnostic accuracy.
            </p>
            <p className="mt-4">
              Another major benefit is <strong>time efficiency</strong>. By
              automating parts of the diagnostic process, expert systems help
              physicians reach conclusions faster, which is critical in
              emergencies where early treatment can save lives.
            </p>
            <p className="mt-4">
              These systems are also highly valuable in{" "}
              <strong>resource-limited settings</strong>, where access to
              specialists may be scarce. By standardizing diagnostic practices,
              they ensure patients receive appropriate care regardless of
              location. Additionally, they support continuous learning by
              integrating new medical knowledge into their databases over time.
            </p>
          </>
        }
      />
      <Section
        header="Challenges of Expert System in Pneumonia Diagnosis"
        text={
          <>
            <p>
              While expert systems offer many benefits, they also face notable
              <strong>challenges</strong> in pneumonia diagnosis. One of the
              main issues is <strong>data quality</strong>. These systems depend
              on accurate and comprehensive medical records, but in many
              healthcare settings, patient data may be incomplete, inconsistent,
              or difficult to access.
            </p>
            <p className="mt-4">
              Another challenge is <strong>adaptability</strong>. Pneumonia can
              be caused by different pathogens and present with varying symptoms
              across patients. Expert systems must be constantly updated with
              the latest medical guidelines and research findings to remain
              effective, which requires significant resources and technical
              expertise.
            </p>
            <p className="mt-4">
              There are also concerns about <strong>clinical acceptance</strong>
              . Many healthcare professionals may be hesitant to rely on
              computerized decision-making tools, preferring traditional
              clinical judgment. Ensuring that expert systems complement rather
              than replace doctors is essential for adoption.
            </p>
            <p className="mt-4">
              Finally, <strong>technical and ethical issues</strong> such as
              cybersecurity, patient privacy, and accountability in case of
              misdiagnosis present ongoing challenges that must be addressed
              before expert systems can be widely trusted in clinical practice.
            </p>
          </>
        }
      />
    </>
  );
};

export default Home;
