'use server'

// Module imports
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export async function logout() {
  cookies().delete('session');
  redirect('/')
};
