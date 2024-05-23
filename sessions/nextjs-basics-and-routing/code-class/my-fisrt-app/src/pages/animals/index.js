import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Animals.module.css';
import animals from '../../data/animals.json';

export default function Animals() {
	console.log('animals', animals);
	return (
		<>
			<Head>
				<title>Animals</title>
			</Head>
			<main className={styles.main}>
				<h1>List of Animals</h1>
				<section className={styles.cardsSection}>
					{animals.map((animal, index) => {
						return (
							<Link key={index} href={`/animals/${animal.name.toLowerCase()}`}>
								<div className={styles.animalCard}>
									<Image
										src={animal.image}
										alt={animal.name}
										width={450}
										height={326}
									/>
									<h1>{animal.name}</h1>
								</div>
							</Link>
						);
					})}
				</section>
			</main>
		</>
	);
}
