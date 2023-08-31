import supabase from './supabase';

export async function getInterviews() {
	const { data, error } = await supabase.from('interviews').select('*');
	if (error) {
		console.error(error);
		throw new Error('Interviews konnten nicht geladen werden.');
	}

	return data;
}
