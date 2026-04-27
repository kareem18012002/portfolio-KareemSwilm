import { useState } from 'react'
import { personalInfo } from '../data/portfolio'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', phone:'', type:'', message:'' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    const subject = `Portfolio Contact - ${form.firstName} ${form.lastName} (${form.type})`
    const body = [
      `First Name: ${form.firstName}`,
      `Last Name: ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Opportunity Type: ${form.type}`,
      '',
      'Message:',
      form.message,
    ].join('\n')

    window.location.href = `mailto:kareemswilm9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setForm({ firstName:'', lastName:'', email:'', phone:'', type:'', message:'' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <div id="contact" className={styles.wrapper}>
      <div className="section">
        <div className="section-label reveal">// 06. CONTACT</div>
        <h2 className="section-title reveal">Let's <span>Connect</span></h2>

        <div className={styles.grid}>
          <div className={`${styles.formCard} reveal`}>
            <div className={styles.formHeader}>
              <h3>Send a Message</h3>
              <p>Actively seeking opportunities in Dubai — full-time, freelance, or collaboration.</p>
            </div>

            {sent ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✓</span>
                Email draft opened for ارسال الرسالة إلى kareemswilm9@gmail.com.
              </div>
            ) : (
              <form className={styles.form} onSubmit={submit}>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <input name="firstName" value={form.firstName} onChange={handle}
                      placeholder="First Name *" required />
                  </div>
                  <div className={styles.group}>
                    <input name="lastName" value={form.lastName} onChange={handle}
                      placeholder="Last Name *" required />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <input name="email" type="email" value={form.email} onChange={handle}
                      placeholder="Email Address *" required />
                  </div>
                  <div className={styles.group}>
                    <input name="phone" type="tel" value={form.phone} onChange={handle}
                      placeholder="Phone Number" />
                  </div>
                </div>
                <div className={styles.group}>
                  <select name="type" value={form.type} onChange={handle} required>
                    <option value="">Select Opportunity Type *</option>
                    <option value="fulltime">Full-Time Position</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={styles.group}>
                  <textarea name="message" value={form.message} onChange={handle}
                    placeholder="Tell me about the opportunity *" required rows={5} />
                </div>
                <div className={styles.formActions}>
                  <button type="submit" className={styles.sendBtn}>Send Message →</button>
                  <button type="button" onClick={() => setForm({ firstName:'', lastName:'', email:'', phone:'', type:'', message:'' })}
                    className={styles.resetBtn}>Clear</button>
                </div>
              </form>
            )}
          </div>

          <div className={styles.sidePanel}>
            <div className={`${styles.infoBlock} reveal`}>
              <h3>Ready to Collaborate?</h3>
              <p>Whether it's a full-time role, a freelance project, or a quick question — I'm just a message away.</p>
            </div>

            {[
              { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: '✉' },
              { label: 'LinkedIn', value: 'linkedin.com/in/kareem-swilm', href: personalInfo.linkedin, icon: 'in' },
              { label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g,'')}`, icon: '☎' },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                className={`${styles.contactCard} reveal`}>
                <div className={styles.contactIcon}>{c.icon}</div>
                <div>
                  <div className={styles.contactLabel}>{c.label}</div>
                  <div className={styles.contactValue}>{c.value}</div>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
