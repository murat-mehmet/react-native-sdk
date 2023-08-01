import type { TSEGMENTIFY_EVENT_PARAMETERS } from '../types';

/**
 * SEGMENTIFY_EVENT_PARAMS
 * @description
 * SEGMENTIFY_EVENT_PARAMS is a constant object that contains all possible parameters that can be sent with Segmentify events.
 * Each event has requiredParams and optionalParams. requiredParams is a string array that contains required parameters for the event.
 * optionalParams is a string array that contains optional parameters for the event.
 * If you send an event with missing required parameters, you will get an error response from Segmentify API.
 * If you send an event with missing optional parameters, you will not get an error response from Segmentify API.
 * You can check the required and optional parameters for each event from this object.
 */

const commonParams = ['sessionId', 'userId', 'lang', 'device', 'os'];

export const SEGMENTIFY_EVENT_PARAMS: TSEGMENTIFY_EVENT_PARAMETERS = {
  PAGE_VIEW: {
    requiredParams: [...commonParams],
    optionalParams: ['category', 'subCategory'],
  },
  PRODUCT_VIEW: {
    requiredParams: ['productId', ...commonParams],
    optionalParams: [
      'title',
      'url',
      'mUrl',
      'image',
      'imageXS',
      'imageS',
      'imageM',
      'imageL',
      'imageXL',
      'additionalImages',
      'mainCategory',
      'category',
      'categories',
      'price',
      'oldPrice',
      'specialPrice',
      'lastUpdateTime',
      'inStock',
      'stockCount',
      'stockRatio',
      'stockStatus',
      'brand',
      'gender',
      'labels',
      'sizes',
      'allSizes',
      'colors',
      'publishTime',
      'source',
      'noUpdate',
      'activeBanners',
      'groupId',
      'scoreCount',
      'reviewCount',
      'subSource',
      'paramsList',
    ],
  },
  BASKET_OPERATIONS: {
    requiredParams: ['productId', 'basketId', 'step', ...commonParams],
    optionalParams: ['price', 'quantity', 'size', 'activeBanners'],
  },
  CHECKOUT: {
    requiredParams: ['totalPrice', 'basketId', 'step', ...commonParams],
    optionalParams: [
      'productList',
      'orderNo',
      'paymentType',
      'activeBanners',
      'cartUrl',
      'totalDiscount',
      'discounts',
      'shipment',
      'tax',
      'coupon',
    ],
  },
  USER_OPERATIONS: {
    requiredParams: ['step', ...commonParams],
    optionalParams: [
      'username',
      'fullName',
      'phone',
      'gender',
      'birthDate',
      'segments',
      'memberSince',
      'service',
      'isRegistered',
      'isLogin',
      'location',
      'emailNtf',
      'mailTest',
      'pushTest',
      'custom',
      'external',
      'userIysPermissions',
      'lastSearchDeletedKeywords',
    ],
  },
  CUSTOM_EVENT: {
    requiredParams: ['type', ...commonParams],
    optionalParams: [],
  },
  INTERACTION: {
    requiredParams: ['type'],
    optionalParams: ['interactionId', 'instanceId', ...commonParams],
  },
  SEARCH: {
    requiredParams: ['sessionId', 'userId', ...commonParams],
    optionalParams: [
      'query',
      'type',
      'ordering',
      'filters',
      'trigger',
      'service',
      'mode',
    ],
  },
};
