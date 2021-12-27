import { useState } from 'react';

function Modal(){

    const [showModal, setShowModal] = useState(false);

    function showModalMethod(){
        setShowModal(!showModal);
    }

    return (
        <div>
            <section>
                {!showModal && <button className="privacy-policy" onClick={showModalMethod}>Privacy Policy</button>}
            </section>
            
            <section>
                {showModal && <div className="modal-css">
                        <p className="modal-header">Privacy Policy</p>
                        <div className="modal-body">
                            <p>We collect your personal information relating to your identity, demographics and when you use our Platform, services or otherwise interact with us during the course of our relationship and related information provided from time to time. Some of the information that we may collect includes but is not limited to Information provided to us during sign-up/registering or using our Platform such as name, date of birth, address, telephone/mobile number, email ID, occupation and any such information shared as proof of identity or address.Some of the information such as your shopping behaviour, preferences, call data records, device location, voice, your browsing history, and other information that you may provide to us from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth, and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our Platform to make your experience safer and easier. In general, you can browse the Platform without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional. You always have the option to not provide information, by choosing not to use a particular service or feature on the Platform. We may track your buying behaviour, preferences, and other information that you choose to provide on our Platform. We use this information to do research on our users' demographics, interests, and behaviour to better understand and serve our users. This information is compiled and analysed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on our Platform or not), which URL you next go to (whether this URL is on our Platform or not), your computer browser information, and your IP address.  we will collect and store your personal information such as name, contact number, email address, communication address, date of birth, gender, zip code, lifestyle information, demographic and work details which is provided by you to us or a third-party business partner that operates platforms where you can earn loyalty points for purchase of goods and services, and/or also redeem them.</p><br/>
                            <p>We will also collect your information related to your transactions on Platform and such third-party business partner platforms. When such a third-party business partner collects your personal information directly from you, you will be governed by their privacy policies. We shall not be responsible for the third-party business partner’s privacy practices or the content of their privacy policies, and we request you to read their privacy policies prior to disclosing any information. If you choose to post messages on our message boards, personalised messages, images, photos, gift card message box, chat rooms or other message areas or leave feedback/product review or if you use voice commands to shop on the Platform, we will collect that information you provide to us. Please note such messages posted by you will be in public domain and can be read by others as well, please exercise caution while posting such messages, personal details, photos and reviews. We retain this information as necessary to resolve disputes, provide customer support, internal research and troubleshoot problems as permitted by law. If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Platform, we may collect such information into a file specific to you. While you can browse some sections of our Platform without being a registered member, certain activities (such as placing an order or consuming our online content or services or participating in any event) requires registration. We may use your contact information to send you offers based on your previous orders or preferences and your interests.</p>
                        </div>
                        <button className="modal-footer" onClick={showModalMethod}>Close</button>
                </div>}
            </section>
        </div>
    );
}

export default Modal;