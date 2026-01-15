import { motion } from "framer-motion";
import { BiSupport, BiWorld, BiUserVoice } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";

const benefits = [
  {
    icon: <FaRobot size={32} />,
    title: "AI-Powered Tools",
    desc: "Smart resume suggestions, career advice, and job matching powered by AI.",
    delay: 0.2,
  },
  {
    icon: <BiWorld size={32} />,
    title: "Multilingual Support",
    desc: "Choose your native language and explore with ease. Truly global, truly local.",
    delay: 0.4,
  },
  {
    icon: <BiUserVoice size={32} />,
    title: "Voice-Assisted Interaction",
    desc: "Designed for inclusive access—helping users who may not type easily.",
    delay: 0.6,
  },
  {
    icon: <BiSupport size={32} />,
    title: "24/7 Career Support",
    desc: "Real-time help and curated resources for any stage of your journey.",
    delay: 0.8,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left – Benefit Cards */}
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-purple-700"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose SkillMitra?
          </motion.h2>

          <div className="space-y-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="flex gap-4 items-start p-4 bg-gray-100 rounded-xl shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: benefit.delay }}
                viewport={{ once: true }}
              >
                <div className="text-purple-600">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right – Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <img
            src="whyus.jpg"
            alt="Why Choose SkillMitra"
            className="rounded-xl w-full shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;