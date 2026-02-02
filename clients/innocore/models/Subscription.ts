/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionStatusEnum } from './SubscriptionStatusEnum';
export type Subscription = {
    id: number;
    owner_id: string;
    stripe_id: string;
    plan_name: string;
    plan_id: string;
    price: number;
    interval: string;
    currency: string;
    status: SubscriptionStatusEnum;
    start_date: string;
    end_date: (string | null);
};

