import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'
import styles from '../style';

const Testimonial = () => (
    <section id ='clients' className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} max-w-[1240px] mx-auto flex-col relative`}>
        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
            <h1 className={`${styles.heading2} text-black`}>
                What are people <br className='sm:block hidden'/> are saying about us...
            </h1>
            <p className={`${styles.paragraph} text-left max-w-[450px] mr-8`}>
                These are completely unbiased examples.
            </p>
        </div>

        <div className='flex flex-wrap justify-center feedback-container w-full relative z-[1]'>
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
)

export default Testimonial