import React, { Component } from 'react';
import { Row, Column } from '../grid';

class Terms extends Component {
    componentDidMount() {
      document.body.setAttribute("id", this.props.id);
      document.title = this.props.title;
      this.props.pageChange(this.props.path);
    }
    render() {
  
      return (
        
          <Row>
            <Column size="12 sm-4">
            <h1>{this.props.title}</h1>
            <p>Last updated: September 12, 2018</p>
            </Column>
            <Column size="12 sm-8">
            <p>Please read these Terms and Conditions ("Terms", "Terms and Conditions")
              carefully before using the https://www.brianmoneypenny.net website (the
              "Service") operated by Brian Moneypenny ("us", "we", or "our").</p>

              <p>Your access to and use of the Service is conditioned upon your acceptance of
              and compliance with these Terms. These Terms apply to all visitors, users and
              others who wish to access or use the Service.</p>

              <p>By accessing or using the Service you agree to be bound by these Terms. If
              you disagree with any part of the terms then you do not have permission to
              access the Service.</p>

              <h2>Intellectual Property</h2>

              <p>The Service and its original content, features and functionality are and will
              remain the exclusive property of Brian Moneypenny and its licensors. The Service
              is protected by copyright, trademark, and other laws of both the United States
              and foreign countries. Our trademarks and trade dress may not be used in
              connection with any product or service without the prior written consent of
              Brian Moneypenny.</p>

              <h2>Links To Other Web Sites</h2>

              <p>Our Service may contain links to third party web sites or services that are
              not owned or controlled by Brian Moneypenny</p>

              <p>Brian Moneypenny has no control over, and assumes no responsibility for the
              content, privacy policies, or practices of any third party web sites or
              services. We do not warrant the offerings of any of these entities/individuals
              or their websites.</p>

              <p>You acknowledge and agree that Brian Moneypenny shall not be responsible or
              liable, directly or indirectly, for any damage or loss caused or alleged to be
              caused by or in connection with use of or reliance on any such content, goods or
              services available on or through any such third party web sites or services.</p>

              <p>We strongly advise you to read the terms and conditions and privacy policies
              of any third party web sites or services that you visit.</p>

              <h2>Termination</h2>

              <p>We may terminate or suspend your access to the Service immediately, without
              prior notice or liability, under our sole discretion, for any reason whatsoever
              and without limitation, including but not limited to a breach of the Terms.</p>

              <p>All provisions of the Terms which by their nature should survive termination
              shall survive termination, including, without limitation, ownership provisions,
              warranty disclaimers, indemnity and limitations of liability.</p>

              <h2>Indemnification</h2>

              <p>You agree to defend, indemnify and hold harmless Brian Moneypenny and its
              licensee and licensors, and their employees, contractors, agents, officers and
              directors, from and against any and all claims, damages, obligations, losses,
              liabilities, costs or debt, and expenses (including but not limited to
              attorney's fees), resulting from or arising out of a) your use and access of the
              Service, or b) a breach of these Terms.</p> 

              <h2>Limitation Of Liability</h2>

              <p>In no event shall Brian Moneypenny, nor its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect, incidental,
              special, consequential or punitive damages, including without limitation, loss
              of profits, data, use, goodwill, or other intangible losses, resulting from (i)
              your access to or use of or inability to access or use the Service; (ii) any
              conduct or content of any third party on the Service; (iii) any content obtained
              from the Service; and (iv) unauthorized access, use or alteration of your
              transmissions or content, whether based on warranty, contract, tort (including
              negligence) or any other legal theory, whether or not we have been informed of
              the possibility of such damage, and even if a remedy set forth herein is found
              to have failed of its essential purpose.</p>

              <h2>Disclaimer</h2>

              <p>Your use of the Service is at your sole risk. The Service is provided on an
              "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of
              any kind, whether express or implied, including, but not limited to, implied
              warranties of merchantability, fitness for a particular purpose,
              non-infringement or course of performance.</p>

              <p>Brian Moneypenny its subsidiaries, affiliates, and its licensors do not
              warrant that a) the Service will function uninterrupted, secure or available at
              any particular time or location; b) any errors or defects will be corrected; c)
              the Service is free of viruses or other harmful components; or d) the results of
              using the Service will meet your requirements.</p>
              <h2>Exclusions</h2>

              <p>Some jurisdictions do not allow the exclusion of certain warranties or the
              exclusion or limitation of liability for consequential or incidental damages, so
              the limitations above may not apply to you.</p>

              <h2>Governing Law</h2>

              <p>These Terms shall be governed and construed in accordance with the laws of
              California, United States, without regard to its conflict of law provisions.</p>

              <p>Our failure to enforce any right or provision of these Terms will not be
              considered a waiver of those rights. If any provision of these Terms is held to
              be invalid or unenforceable by a court, the remaining provisions of these Terms
              will remain in effect. These Terms constitute the entire agreement between us
              regarding our Service, and supersede and replace any prior agreements we might
              have had between us regarding the Service.</p>

              <h2>Changes</h2>

              <p>We reserve the right, at our sole discretion, to modify or replace these
              Terms at any time. If a revision is material we will provide at least 30 days
              notice prior to any new terms taking effect. What constitutes a material change
              will be determined at our sole discretion.</p>

              <p>By continuing to access or use our Service after any revisions become
              effective, you agree to be bound by the revised terms. If you do not agree to
              the new terms, you are no longer authorized to use the Service.</p>


              <h2>Contact Us</h2>

              <p>If you have any questions about these Terms, please contact us.</p>                         
            </Column>
          </Row>          
          
      
      );
    }
  }

  export default Terms;