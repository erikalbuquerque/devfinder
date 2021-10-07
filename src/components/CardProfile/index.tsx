import { useUser } from '../../hooks/useUser';

import { ImLocation } from 'react-icons/im';
import { BsLink45Deg, BsTwitter } from 'react-icons/bs';
import { BiBuildings } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

import styles from './styles.module.scss';

export function CardProfile() {
	const { user } = useUser();
	return (
		<div className={styles.cardProfileContainer}>
			{user.name ? (
				<>
					<header>
						<img src={user.avatar_url} alt={user.name} />
						<div className={styles.cardProfileTexts}>
							<strong>{user.name}</strong>
							<a href={user.html_url}>@{user.login}</a>
							<span>{user.bio ? user.bio : 'This profile has no bio'}</span>
						</div>
						<span>
							Joined{' '}
							{user.created_at && new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
								new Date(user.created_at)
							)}
						</span>
					</header>

					<div className={styles.cardProfileInformation}>
						<div className={styles.cardProfileNetwork}>
							<div>
								<span>Repos</span>
								<span>{user.public_repos}</span>
							</div>
							<div>
								<span>Followers</span>
								<span>{user.followers}</span>
							</div>
							<div>
								<span>Following</span>
								<span>{user.following}</span>
							</div>
						</div>
						<div className={styles.cardProfileSociais}>
							<div>
								<span className={user.location ? '' : styles.notAvaliable}>
									<ImLocation />
									{user.location ? user.location : 'Not Available'}
								</span>
								<span className={user.blog ? '' : styles.notAvaliable}>
									<BsLink45Deg />
									{user.blog ? user.blog : 'Not Available'}
								</span>
							</div>
							<div>
								<span className={user.twitter_username ? '' : styles.notAvaliable}>
									<BsTwitter />
									{user.twitter_username ? user.twitter_username : 'Not Available'}
								</span>
								<span className={user.company ? '' : styles.notAvaliable}>
									<BiBuildings />
									{user.company ? user.company : 'Not Available'}
								</span>
							</div>
						</div>
					</div>
				</>
			) : (
				<div className={styles.alertMessage}> 
					<FaGithub size={70}/>
					<div>
						<h1>Oops!</h1>
						<span>its seems something went wrong.</span>
					</div>
				</div>
			)}
		</div>
	);
}
