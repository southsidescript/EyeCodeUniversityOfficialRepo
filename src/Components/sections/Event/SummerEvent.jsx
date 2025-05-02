import styles from "./styles.module.css"
import { CodeIcon, Calendar, Users, Gift, Trophy, MessageCircle, Star, GitFork } from "lucide-react"

const EyeCodeBattlePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <CodeIcon className={styles.icon} size={24} />
            <span className={styles.title}>EyeCode Battle</span>
            <span className={styles.badge}>Summer Edition</span>
          </div>
          <div className={styles.headerActions}>
            <div className={styles.action}>
              <Star size={16} className={styles.actionIcon} />
              <span>Star</span>
            </div>
            <div className={styles.action}>
              <GitFork size={16} className={styles.actionIcon} />
              <span>Fork</span>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.repoHeader}>
          <div className={styles.repoInfo}>
            <span className={styles.repoVisibility}>Public</span>
            <h2 className={styles.repoName}>eyecode-university/summer-battle-2025</h2>
          </div>
        </div>

        <div className={styles.tabs}>
          <div className={styles.tab + " " + styles.activeTab}>
            <CodeIcon size={16} className={styles.tabIcon} />
            <span>README.md</span>
          </div>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.hero}>
              <h1 className={styles.heroTitle}>EyeCode Battle: Summer Edition</h1>
              <p className={styles.heroSubtitle}>Регистрация открыта! 🎉</p>

              <div className={styles.eventDetails}>
                <div className={styles.eventDetail}>
                  <Calendar className={styles.detailIcon} size={16} />
                  <span>Старт: 15 мая</span>
                </div>
                <div className={styles.eventDetail}>
                  <Users className={styles.detailIcon} size={16} />
                  <span>Формат: онлайн</span>
                </div>
              </div>

              <a href="https://wa.me/79283526584" className={styles.button}>
                Зарегистрироваться через WhatsApp
              </a>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>О соревновании</h2>
            <p className={styles.text}>
              EyeCode University с гордостью объявляет начало регистрации на самое масштабное летнее ИТ-соревнование
              этого года — EyeCode Battle: Summer Edition!
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Условия участия</h2>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span>registration-requirements.md</span>
              </div>
              <div className={styles.codeContent}>
                <p>Участие в соревновании — командное.</p>
                <ul>
                  <li>В команде должно быть 3 участника:</li>
                  <li>2 студента EyeCode University</li>
                  <li>1 приглашённый друг — не из EyeCode, которого команда сама приводит</li>
                </ul>
                <p>Только после формирования такой команды вы можете подать заявку на регистрацию.</p>
              </div>
            </div>

          
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Призы</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                 
                  <h3 className={styles.cardTitle}>Основные призы</h3>
                </div>
                <ul className={styles.list}>
                  <li>  <Trophy className={styles.cardIcon} color="green" size={14} /> Steam gift cards</li>
                  <li>  <Trophy className={styles.cardIcon} color="green" size={14} /> Мерч от EyeCode</li>
                  <li>  <Trophy className={styles.cardIcon} color="green" size={14} /> Коврики для мышки</li>
                </ul>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <Gift className={styles.cardIcon} size={16} />
                  <h3 className={styles.cardTitle}>Призы за номинации</h3>
                </div>
                <ul className={styles.list}>
                  <li>Игровая механическая мышка от Ardor Games</li>
                  <li>Коврик для мышки от Ardor Games</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Номинации</h2>
            <div className={styles.issues}>
              <div className={styles.issue}>
                <div className={styles.issueTitle}>
                  <span className={styles.issueIcon}>🏅</span>
                  Лучшая архитектура кода
                </div>
                <div className={styles.labels}>
                  <span className={styles.label + " " + styles.labelGreen}>architecture</span>
                  <span className={styles.label + " " + styles.labelBlue}>code-quality</span>
                </div>
              </div>
              <div className={styles.issue}>
                <div className={styles.issueTitle}>
                  <span className={styles.issueIcon}>🏅</span>
                  Лучший лидер
                </div>
                <div className={styles.labels}>
                  <span className={styles.label + " " + styles.labelPurple}>leadership</span>
                  <span className={styles.label + " " + styles.labelOrange}>team-management</span>
                </div>
              </div>
              <div className={styles.issue}>
                <div className={styles.issueTitle}>
                  <span className={styles.issueIcon}>🏅</span>
                  Лучший дизайн
                </div>
                <div className={styles.labels}>
                  <span className={styles.label + " " + styles.labelRed}>ui-design</span>
                  <span className={styles.label + " " + styles.labelYellow}>user-experience</span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Дополнительная информация</h2>
            <div className={styles.infoBlock}>
              <p className={styles.text}>
                Каждый приглашённый тестировщик получит доступ к часовой лекции. В рамках этой встречи будет обсуждаться
                актуальное состояние индустрии информационных технологий в России, а также будет реализован практический
                проект, позволяющий лучше понять основы программирования.
              </p>
              <p className={styles.text}>
                Задание и условия будут доступны 12.05.2025 чтобы никто не смог преждевременно начать выполнение!
              </p>
              <p className={styles.text}>
                Участвуйте не только ради победы — это возможность показать себя, научиться новому и поработать в
                настоящей командной разработке!
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2025 EyeCode University. Все права защищены.</p>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>
              Terms
            </a>
            <a href="#" className={styles.footerLink}>
              Privacy
            </a>
            <a href="#" className={styles.footerLink}>
              Security
            </a>
            <a href="#" className={styles.footerLink}>
              Status
            </a>
            <a href="#" className={styles.footerLink}>
              Help
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}


export default EyeCodeBattlePage;