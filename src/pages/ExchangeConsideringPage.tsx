import Alert from 'react-bootstrap/Alert'

function ExchangeConsideringPage() {
  return (
    <div className="d-grid gap-4">
      <section className="exchange-links-card">
        <p className="section-kicker">Considering UW-Madison</p>
        <h2 className="saved-heading">
          Study in a top U.S. public university and build a real support network.
        </h2>
        <p className="section-description">
          {'<Image placeholder: wide campus view of UW-Madison by the lake at sunset>'}
        </p>
      </section>

      <section className="exchange-links-card">
        <h3>Why UW-Madison</h3>
        <p className="section-description">
          UW-Madison is a strong choice if you want both academic quality and a realistic student
          life. You get globally recognized programs, active research opportunities, and a large
          campus community where international students can find peers quickly.
        </p>
      </section>

      <section className="exchange-links-card">
        <h3>Quick Facts</h3>
        <ul>
          <li>
            Ranked around #36 overall and #12 among U.S. public universities (U.S. News, 2026
            ranking release).
          </li>
          <li>
            Computer Science is ranked around top 10 among U.S. public universities (#9 in the
            latest UW/CDIS ranking update).
          </li>
          <li>
            These rankings matter because they usually reflect research strength, faculty quality,
            and employer reputation, which affect your classes, projects, and internship access.
          </li>
          <li>
            Large university scale means many course choices, student organizations, and campus
            resources, but you should expect to plan early for popular classes.
          </li>
        </ul>
      </section>

      <section className="exchange-links-card">
        <h3>Academics</h3>
        <p className="section-description">
          Strong options include Computer Science, Engineering, and Business, with opportunities
          to join labs, design teams, and career-focused events. Be realistic: some gateway
          courses are challenging, and intro classes can be large. If you use office hours, study
          groups, and advising early, it is manageable and worth it.
        </p>
      </section>

      <section className="exchange-links-card">
        <h3>Student Life</h3>
        <p className="section-description">
          Housing costs vary by location and style, but many students budget roughly
          $800-$1,500/month for rent. Groceries and meals are manageable with planning, and campus
          food choices are broad. Winter is real in Madison: snow, wind, and below-freezing days
          are normal, so a proper coat, boots, and layering are essential for daily life.
        </p>
        <p className="section-description">
          {'<Image placeholder: students walking between classes in winter jackets on snowy campus paths>'}
        </p>
      </section>

      <section className="exchange-links-card">
        <h3>Why JSA</h3>
        <p className="section-description">
          JSA helps exchange and international students find people quickly, ask practical
          questions, and feel less isolated in the first months. From events to everyday advice,
          you are not expected to figure everything out alone.
        </p>
        <p className="section-description">
          {'<Image placeholder: JSA community event with students talking and sharing food>'}
        </p>
      </section>

      <section className="exchange-links-card">
        <h3>Student Voices</h3>
        <ul>
          <li>
            "My first semester was hard academically, but joining a student group made Madison
            feel smaller and friendlier."
          </li>
          <li>
            "Winter surprised me, but once I bought proper gear, campus life became much easier."
          </li>
          <li>
            "The classes are demanding, but I gained practical skills and better confidence in
            English discussion."
          </li>
        </ul>
      </section>

      <section className="exchange-links-card">
        <p className="section-kicker">Next Step</p>
        <h2 className="saved-heading">If this feels like your direction, start preparing early.</h2>
        <p className="section-description">
          Compare your course goals, budget, and climate preferences now, then move to
          &quot;Preparing for UW-Madison&quot; to build your checklist.
        </p>
        <Alert variant="light" className="mb-0">
          Decision tip: UW-Madison is a great fit for students who want strong academics and are
          ready for a large, active campus environment.
        </Alert>
      </section>
    </div>
  )
}

export default ExchangeConsideringPage
