import { ImLocation } from 'react-icons/im';
import { BsLink45Deg, BsTwitter } from 'react-icons/bs';

import styles from './styles.module.scss';

export function CardProfile() {
	return (
		<div className={styles.cardProfileContainer}>
			<header>
				<img src="https://avatars.githubusercontent.com/u/39579838?v=4" alt="user" />
				<div className={styles.cardProfileTexts}>
					<strong>the octocat</strong>
					<a href="#">@octocat</a>
					<span>This profile has no bio</span>
				</div>
				<span>Joined 25 Jan 2011</span>
			</header>

			<div className={styles.cardProfileInformation}>
				<div className={styles.cardProfileNetwork}>
          <div>
            <span>Repos</span>
            <span>8</span>
          </div>
          <div>
            <span>Followers</span>
            <span>3983</span>
          </div>
          <div>
            <span>Following</span>
            <span>9</span>
          </div>
        </div>
				<div className={styles.cardProfileSociais}>
					<div>
						<span>
							<ImLocation />
							San Francisco
						</span>
						<span>
							<BsLink45Deg />
							https://github.blog
						</span>
					</div>
          <div>
						<span className={styles.notAvaliable}>
							<BsTwitter />
							Not Available
						</span>
						<span>
            <BsTwitter />
							@github
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
