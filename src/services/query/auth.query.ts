import { useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';
import { login, logout, signup } from "../api/auth.api";
import { toast } from "react-toastify";
import { useAuthentication } from "@/hooks/useAuthentication";
import { IUser } from "@/types";

type useLoginParams = {
    redirectUrl:string;
}
export function useLogin({ redirectUrl }:useLoginParams) {
    const navigation = useNavigate();
    const { setPrincipal } = useAuthentication();
    return useMutation({
        mutationFn: login,
        mutationKey: ['AUTH'],
        onError: (error, variables, context) => {
            console.error(error);
            toast.error('Error while login');
        },
        onSuccess: (data, variables, context) => {
            const loggedInUser = data!.data;
            toast.success('User Login Successful');
            
            setPrincipal(loggedInUser!);
            setTimeout(() => {
                navigation(redirectUrl);
            }, 500);
        },
    });
}

export function useSignup({ redirectUrl }:useLoginParams) {
    const navigation = useNavigate();
    const { setPrincipal } = useAuthentication();
    return useMutation({
        mutationFn: signup,
        mutationKey: ['AUTH'],
        onError: (error, variables, context) => {
            console.error(error);
            toast.error('Error while Signup');
        },
        onSuccess: (data, variables, context) => {
            const loggedInUser = data!.data;
            toast.success('Signup  Successful');
            
            setPrincipal(loggedInUser!);
            setTimeout(() => {
                navigation(redirectUrl);
            }, 500);
        },
    });
}


export function useLogout() {
    const { setPrincipal } = useAuthentication();

    return useMutation({
        mutationFn: logout,
        mutationKey: ['AUTH'],
        onError: (error, variables, context) => {
            toast.error('Error while login');
        },
        onSuccess: (data, variables, context) => {
            toast.success('Sign-out Successful');
            setPrincipal(null as unknown as IUser);
            //setTimeout(() => navigate('login'), 1000);
        },
    });
}