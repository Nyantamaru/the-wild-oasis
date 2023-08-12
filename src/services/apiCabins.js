import supabase, { supabaseUrl } from './supabase';
export const getCabins = async () => {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.log(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
};

export const createCabin = async (newCabin) => {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // https://gfzuszbnjkbzfqtdygjo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-07-07T02%3A29%3A21.814Z
  // 1. Create cabin
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error('Cabin could not be created');
  }

  // 2. Upload image
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin if there was an Error
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.log(storageError);
    throw new Error(
      'Cabin image could not be uploaded and he cabin was not created'
    );
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('Cabin could not be deleted');
  }
  return data;
};
