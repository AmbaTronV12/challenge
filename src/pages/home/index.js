import React, { useState, useEffect } from 'react';
import styles from './home.module.css'
import { header, sidebarLogo, logo, logo2, trainer, trainer1, trainer2, trainer3, 
  timetable, dummbell, hormone, card1, card2, card3, personal, open, pilates, about1, about2, about3, about4,review1, review2 
} from '../../asset/index';
import GoogleMapComponent from '../googlemap/index';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';



function Home() {
    const [showStickyNav, setShowStickyNav] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false); // NEW State for login popup
    const [isRegistering, setIsRegistering] = useState(false); // NEW: State to switch between Login and Register
    const [selectedMembership, setSelectedMembership] = useState('');


    const scheduleData = [
      { time: '08.00', mon: '', tue: 'HIIT THE CLIFF', wed: '', thu: 'HIIT THE CLIFF', fri: '', sat: 'HIIT THE CLIFF' },
      { time: '09.00', mon: 'HOT PILLATES', tue: 'HOT PILLATES', wed: 'HOT PILLATES', thu: 'HOT PILLATES', fri: 'HOT PILLATES', sat: 'HOT PILLATES' },
      { time: '10.00', mon: '', tue: 'STRONGER', wed: '', thu: 'STRONGER', fri: '', sat: 'STRONGER' },
      { time: '11.00', mon: 'CONDITIONING', tue: '', wed: 'CONDITIONING', thu: '', fri: 'CONDITIONING', sat: '' },
    ];

     const workoutItems = [
      {
        id: 'personal',
        image: personal,
        title: 'PERSONAL TRAINER',
        description: 'Achieve your fitness goals faster with personalized one-on-one coaching tailored to your needs and abilities. Our expert trainers provide guidance, motivation, and custom workout plans.'
      },
      {
        id: 'open',
        image: open,
        title: 'OPEN GYM',
        description: 'Enjoy the freedom to train at your own pace with full access to our state-of-the-art equipment. Perfect for self-motivated individuals looking for flexible workout times.'
      },
      {
        id: 'pilates',
        image: pilates,
        title: 'PILATES',
        description: 'Strengthen your core, improve flexibility, and enhance body awareness through our specialized Pilates classes. Suitable for all levels, focusing on controlled movements and breathwork.'
      },
    ];


  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 200) { // if scroll down hide the navbar
        setShowStickyNav(false);
      } else { // if scroll up show the navbar
        if(window.scrollY > 200) { // only show after scrolling 200px
             setShowStickyNav(true);
        } else {
             setShowStickyNav(false);
        }
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleOverlayClick = () => {
        setIsSidebarVisible(false);
    };
  
  const toggleLoginPopup = () => { // NEW Function to toggle login popup
        setShowLoginPopup(!showLoginPopup);
    };

    const toggleFormMode = () => { // NEW: Function to switch between login and register forms
        setIsRegistering(prev => !prev);
        setSelectedMembership(''); // Reset membership selection when switching forms
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log('Login Submitted:', { username, password });
        // After successful login, you might close the popup
        setShowLoginPopup(false);
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log('Register Submitted:', { username, email, password, selectedMembership });
        // After successful registration, you might close the popup or switch to login mode
        setShowLoginPopup(false);
        setIsRegistering(false);
        setSelectedMembership(''); // Reset selection
    };
  

  return (
    <div className={styles.page}>
       {showLoginPopup && (
                <div className={styles.loginPopupOverlay} onClick={toggleLoginPopup}>
                    <div className={styles.loginPopupContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.loginCloseButton} onClick={toggleLoginPopup}>&times;</button>

                        {/* Toggle between Login and Register Forms */}
                        <div className={styles.formToggle}>
                            <button
                                className={`${styles.toggleButton} ${!isRegistering ? styles.activeToggle : ''}`}
                                onClick={() => setIsRegistering(false)}
                            >
                                Login
                            </button>
                            <button
                                className={`${styles.toggleButton} ${isRegistering ? styles.activeToggle : ''}`}
                                onClick={() => setIsRegistering(true)}
                            >
                                Register
                            </button>
                        </div>

                        {isRegistering ? (
                            // Register Form
                            <form className={styles.loginForm} onSubmit={handleRegisterSubmit}>
                                <h2>REGISTER</h2>
                                <div className={styles.formGroup}>
                                    <label htmlFor="reg-username">Username:</label>
                                    <input type="text" id="reg-username" name="username" className={styles.loginInput} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="reg-email">Email:</label>
                                    <input type="email" id="reg-email" name="email" className={styles.loginInput} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="reg-password">Password:</label>
                                    <input type="password" id="reg-password" name="password" className={styles.loginInput} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="reg-confirm-password">Confirm Password:</label>
                                    <input type="password" id="reg-confirm-password" name="confirmPassword" className={styles.loginInput} required />
                                </div>

                                {/* Membership Selection for Register */}
                                <div className={styles.formGroup}>
                                    <label>Choose Your Membership Pack:</label>
                                    <div className={styles.membershipRadioGroup}>
                                        <label className={styles.membershipRadioLabel}>
                                            <input
                                                type="radio"
                                                name="membership"
                                                value="basic"
                                                checked={selectedMembership === 'basic'}
                                                onChange={(e) => setSelectedMembership(e.target.value)}
                                                className={styles.membershipRadioInput}
                                                required // Make membership selection mandatory for registration
                                            />
                                            Open Gym (Monthly)
                                        </label>
                                        <label className={styles.membershipRadioLabel}>
                                            <input
                                                type="radio"
                                                name="membership"
                                                value="premium"
                                                checked={selectedMembership === 'premium'}
                                                onChange={(e) => setSelectedMembership(e.target.value)}
                                                className={styles.membershipRadioInput}
                                                required
                                            />
                                            Classes (Monthly)
                                        </label>
                                        <label className={styles.membershipRadioLabel}>
                                            <input
                                                type="radio"
                                                name="membership"
                                                value="pro"
                                                checked={selectedMembership === 'pro'}
                                                onChange={(e) => setSelectedMembership(e.target.value)}
                                                className={styles.membershipRadioInput}
                                                required
                                            />
                                            Family Membership (Monthly)
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className={styles.loginSubmitButton}>Register</button>
                            </form>
                        ) : (
                            // Login Form
                            <form className={styles.loginForm} onSubmit={handleLoginSubmit}>
                                <h2>LOGIN</h2>
                                <div className={styles.formGroup}>
                                    <label htmlFor="login-username">Username:</label>
                                    <input type="text" id="login-username" name="username" className={styles.loginInput} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="login-password">Password:</label>
                                    <input type="password" id="login-password" name="password" className={styles.loginInput} required />
                                </div>
                                <button type="submit" className={styles.loginSubmitButton}>Login</button>
                            </form>
                        )}
                        <p className={styles.formSwitchText}>
                            {isRegistering ? "Already have an account? " : "Don't have an account? "}
                            <span onClick={toggleFormMode} className={styles.formSwitchLink}>
                                {isRegistering ? "Login here" : "Register here"}
                            </span>
                        </p>
                    </div>
                </div>
            )}

        <div className={`${styles.stickyNavbar} ${showStickyNav && styles.visible}`}>
          <img src={logo} alt="Logo" className={styles.stickyLogo} />
          <a href="#" className={styles.navLink}>HOME</a>
          <a href="#" className={styles.navLink}>SCHEDULE AND MEMBERSHIP</a>
          <a href="#" className={styles.navLink}>ABOUT</a>
          <a href='#' className={styles.navLink}>CONTACT US</a>
      </div>

      <div className={`${styles.sidebar} ${isSidebarVisible ? styles.sidebarVisible : styles.sidebarHidden}`}>
                <button className={styles.closeButton} onClick={toggleSidebar}>
                    &times;
                </button>
                <img src='#' alt='none'/>
                <div className={styles.sidebarText}>
                  <p className={styles.title}>MONDAY-SATURDAY</p>
                  <p className={styles.time}>07.00 - 21.00</p>
                </div>
                <div className={styles.sidebarText}>
                  <p className={styles.title}>SUNDAY</p>
                  <p className={styles.time}>06.00 - 18.00</p>
                </div>
                <div className={styles.sidebarText}>
                  <p className={styles.title}>CONTACT US:</p>
                  <p className={styles.time}>+62 8123 2223 245</p>
                  <p className={styles.time}>hai@gmail.com</p>
                </div>

                <button className={styles.linkButton} onClick={toggleLoginPopup}>JOIN US</button>

                
            </div>
        <div className={`${styles.overlay} ${isSidebarVisible ? styles.overlayVisible : ''}`}onClick={handleOverlayClick}> </div>

        <header className={styles.header} style={{ '--header-bg-image': `url(${header})` }}>
          
            <img src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.navbar}>
                <nav className={styles.navLinks}>
                    <a href="#" className={styles.navLink}>HOME</a>
                    <a href="#" className={styles.navLink}>SCHEDULE AND MEMBERSHIP</a>
                    <a href="#" className={styles.navLink}>ABOUT</a>
                    <a href='#' className={styles.navLink} onClick={toggleSidebar}>CONTACT US</a>
                    <img src={sidebarLogo} onClick={toggleSidebar}/>
                </nav>
            </div>
            
        </header>
        <div className={styles.about}>
          <img src={logo2} alt="Logo" className={styles.aboutLogo} />
          <div className={styles.text}>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
          </div>
        </div>
        <div className={styles.trainers}>
          <h2>PERSONAL TRAINERS</h2>
          <div className={styles.trainersGrid}>
            <div className={styles.trainer} style={{ backgroundImage: `url(${trainer})` }}>
              <div className={styles.information}>
                <h3>Rico</h3>
                <p>Trainer</p>
              </div>
            </div>
            <div className={styles.trainer} style={{ backgroundImage: `url(${trainer1})` }}>
              <div className={styles.information}>
                <h3>Gerald</h3>
                <p>Trainer</p>
              </div>
            </div>
            <div className={styles.trainer} style={{ backgroundImage: `url(${trainer2})` }}>
              <div className={styles.information}>
                <h3>William</h3>
                <p>Trainer</p>
              </div>
            </div>
            <div className={styles.trainer} style={{ backgroundImage: `url(${trainer3})` }}>
              <div className={styles.information}>
                <h3>David</h3>
                <p>Trainer</p>
              </div>
            </div>
          </div>
          <button className={styles.linkButton} onClick={toggleLoginPopup}>JOIN US</button>
        </div>

        <div className={styles.about}>
          <div className={styles.text}>
            <h2>Power in Balance. Movement with Purpose. Step into Zenetics</h2>
            <h3> a space to grow, sweat, and thrive. Book a class or simply drop in. Your body, your rhythm.</h3>
          </div>
          <img src={logo2} alt="Logo" className={styles.aboutLogo} />
        </div>
        
        <div className={styles.membership}>
            <div className={styles.membershipCard} style={{ backgroundImage: `url(${card1})` }}>
              <img src={timetable} alt="Timetable" className={styles.membershipImage} />
              <h3>classes from 100k</h3>
              <p>learn new skills, challenge yourself, and enjoy the motivation of working out wit others. </p>
              <button className={styles.membershipButton}>book your spot</button>
            </div>
            <div className={styles.membershipCardwhite} style={{ backgroundImage: `url(${card2})` }}>
              <img src={dummbell} alt="Dumbbell" className={styles.membershipImage} />
              <h3>open gym from 50k</h3>
              <p> your wokout, your rules - Train at your own pace with all the aquipment you need.</p>
              <button className={styles.membershipButton}>book your spot</button>
            </div>
            <div className={styles.membershipCard} style={{ backgroundImage: `url(${card3})` }}>
              <img src={hormone} alt="Hormone Therapy" className={styles.membershipImage} />
              <h3>Family Membership from 150k</h3>
              <p>Gym with your beloved family or friends! Up to 4 Members, More cheaper than the regular membership</p>
              <button className={styles.membershipButton}>book your spot</button>
            </div>
          </div>

          <div className={styles.scheduleTableWrapper}>
                <h2 className={styles.scheduleTitle}>
                    SCHEDULE
                    <span className={styles.scheduleTitleUnderline}></span>
                </h2>
                <p className={styles.gymAccessText}>OPEN GYM ACCES</p>
                <p className={styles.timeRangeText}>
                    MONDAY - SATURDAY <span className={styles.highlight}>07.00 - 21.00</span> | SUNDAY <span className={styles.highlight}>06.00 - 18.00</span>
                </p>

                <div className={styles.mainGridContainer}>
                    <div className={styles.scheduleGrid}>
                        {/* Table Header - CRITICAL FIX: Put empty cell first */}
                        <div className={`${styles.tableHeaderCell} ${styles.hiddenSm}`}></div>
                        <div className={styles.tableHeaderCell}>MONDAY</div>
                        <div className={styles.tableHeaderCell}>TUESDAY</div>
                        <div className={styles.tableHeaderCell}>WEDNESDAY</div>
                        <div className={styles.tableHeaderCell}>THURSDAY</div>
                        <div className={styles.tableHeaderCell}>FRIDAY</div>
                        <div className={styles.tableHeaderCell}>SATURDAY</div>

                        {/* Table Rows */}
                        {scheduleData.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {/* Time Column - CRITICAL FIX: Render time column FIRST in each row */}
                                <div className={`${styles.timeCell} ${rowIndex === scheduleData.length - 1 ? styles.lastRow : ''}`}>
                                    {row.time}
                                </div>
                                {/* Activity Cells - Render activity cells AFTER time column */}
                                {Object.keys(row).filter(key => key !== 'time').map((day, colIndex) => (
                                    <div
                                        key={`${rowIndex}-${day}`}
                                        className={`${styles.activityCell} ${row[day] ? styles.hasContent : styles.noContent}`}
                                    >
                                        {row[day]}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Book Now Button for Schedule */}
                <button className={styles.gradientButton}>
                    BOOK NOW
                </button>
            </div>

          <div className={styles.about}>
            <img src={logo2} alt="Logo" className={styles.aboutLogo} />
            <div className={styles.text}>
              <h2>DISCOVER YOUR POTENTIAL AT ZENETICS</h2>
              <h3> Whatever your level or lifestyle, Zenetics offers the perfect blend of classes — from high-intensity sweat sessions to focused strength and mobility training. Empower your journey, your way.</h3>
            </div>
          </div>
        <div className={styles.workout}>
                <div className={styles.workoutContainer}>
                    {workoutItems.map((item) => (
                        <div
                            key={item.id}
                            className={styles.content}
                        >
                            {/* Left part of the content card: Image and Title */}
                            <div className={styles.contentLeft}>
                                <img src={item.image} alt={item.title} className={styles.workoutImage} />
                                <h2>{item.title}</h2>
                            </div>
                            {/* Right part of the content card: Description (hidden until hover) */}
                            <div className={styles.contentRight}>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.about2}>
              <h2>why moving with zenetics?</h2>
              <div className={styles.rowcontainer}>
                <div className={styles.contentContainer}>
                  <img src={about1} alt='about1' className={styles.aboutimage}/>
                  <p className={styles.title}>Your workout, your rules</p>
                  <p className={styles.text}>Our space gives you the freedom to train your way. Choose your routine, set your pace, and enjoy a space designed for your goals – on your terms.</p>
                </div>
                <div className={styles.contentContainer}>
                  <img src={about2} alt='about2' className={styles.aboutimage}/>
                  <p className={styles.title}>value without compromise</p>
                  <p className={styles.text}>Whether you're here for a weekend or staying longer, we’ve made our plans and day passes affordable without compromising on quality.</p>
                </div>
                <div className={styles.contentContainer}>
                  <img src={about3} alt='about3' className={styles.aboutimage}/>
                  <p className={styles.title}>Progress is more than physical here</p>
                  <p className={styles.text}>Meet like-minded people, make new friends, train together and stay motivated.</p>
                </div>
                <div className={styles.contentContainer}>
                  <img src={about4} alt='about4' className={styles.aboutimage}/>
                  <p className={styles.title}>certified coaches</p>
                  <p className={styles.text}>Our coaches are ready to help you get you to your best. Whether in a class or in a personal training session.</p>
                </div>
              </div>
            </div>

                    <div className={styles.reviewcontainer}>
                      <h2> REVIEWS FROM THEM </h2>

                    <div className={styles.review}>
                        <img src={review1}></img>

                        <div className={styles.reviewtext} >
                          <p className={styles.text}>Learn new skills, challenge yourself, and enjoy the motivation of working out with others. </p>
                          <p className={styles.title}>Arnold</p>
                        </div>

                    </div>

                    <div className={styles.review}>

                        <div className={styles.reviewtext2} >
                          <p className={styles.text}>Learn new skills, challenge yourself, and enjoy the motivation of working out with others. </p>
                          <p className={styles.title}>Jennifer</p>
                        </div>

                        <img src={review2}></img>
                    </div>
                    </div>


                    <div className={styles.footer}>

                      <img src={logo2}/>

                            <div className={styles.mapContainer}>
                              <h2>Find Us On Google Maps</h2>
                              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                                <GoogleMap
                                  mapContainerStyle={{ width: '100%', height: '400px' }}
                                  zoom={15}
                                  center={{
                                    lat: -6.2088,
                                    lng: 106.8457
                                  }}
                                >
                                  <Marker
                                    position={{
                                      lat: -6.2088,
                                      lng: 106.8457
                                    }}
                                    title="Zenetics Gym"
                                  />
                                </GoogleMap>
                              </LoadScript>
                            </div>

                        <div className={styles.open}>
                          <h3>OPENING HOURS</h3>
                          <h3>MONDAY - SATURDAY </h3>
                          <h3>07.00 - 21.00</h3>
                          <h3>SUNDAY</h3>
                          <h3>06.00 - 18.00</h3>

                        </div>
                        <div className={styles.contact}>
                          
                          </div>

                    </div>


                    


    </div>



    
  );
}

export default Home;
