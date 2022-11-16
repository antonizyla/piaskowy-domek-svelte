export const hero = {
	hero_text: 'Piaskowy Domek Łeba',
	sub_text:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur vitae facere inventore? Error totam qui dolorum? Culpa corrupti debitis nihil similique perferendis, quasi, deleniti nemo hic nobis sed officia!',
	cta: {
		text: 'Find out More',
		href: '#about'
	}
};

//create a type for hero section with extra field for cta
type Hero = typeof hero & {
	hero_text: string;
	sub_text: string;
	cta: {
		text: string;
		href: string;
	}
}
