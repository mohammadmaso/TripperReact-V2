import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: any;
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
  SocialCamelJSON: any;
  /**
   * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any;
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
};

export type AccessoryBrandInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image: Scalars['Upload'];
};

export type AccessoryBrandType = Node & {
  __typename?: 'AccessoryBrandType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  logo: Scalars['String'];
  accessorymodelSet: AccessoryTypeConnection;
};


export type AccessoryBrandTypeAccessorymodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
  name_Istartswith?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: Maybe<Scalars['String']>;
};

export type AccessoryBrandTypeConnection = {
  __typename?: 'AccessoryBrandTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessoryBrandTypeEdge>>;
};

/** A Relay edge containing a `AccessoryBrandType` and its cursor. */
export type AccessoryBrandTypeEdge = {
  __typename?: 'AccessoryBrandTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AccessoryBrandType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AccessoryCategoryInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image: Scalars['Upload'];
};

export type AccessoryCategoryType = Node & {
  __typename?: 'AccessoryCategoryType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  accessoriesInCategory: AccessoryTypeConnection;
};


export type AccessoryCategoryTypeAccessoriesInCategoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
  name_Istartswith?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: Maybe<Scalars['String']>;
};

export type AccessoryCategoryTypeConnection = {
  __typename?: 'AccessoryCategoryTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessoryCategoryTypeEdge>>;
};

/** A Relay edge containing a `AccessoryCategoryType` and its cursor. */
export type AccessoryCategoryTypeEdge = {
  __typename?: 'AccessoryCategoryTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AccessoryCategoryType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AccessoryCollectionsType = Node & {
  __typename?: 'AccessoryCollectionsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  accessory: AccessoryType;
};

export type AccessoryCollectionsTypeConnection = {
  __typename?: 'AccessoryCollectionsTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessoryCollectionsTypeEdge>>;
};

/** A Relay edge containing a `AccessoryCollectionsType` and its cursor. */
export type AccessoryCollectionsTypeEdge = {
  __typename?: 'AccessoryCollectionsTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AccessoryCollectionsType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AccessoryInput = {
  name: Scalars['String'];
  image?: Maybe<Scalars['Upload']>;
  brand?: Maybe<Scalars['ID']>;
};

export type AccessoryLikeType = Node & {
  __typename?: 'AccessoryLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  accessory: AccessoryType;
  user: UserType;
};

export type AccessoryLikeTypeConnection = {
  __typename?: 'AccessoryLikeTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessoryLikeTypeEdge>>;
};

/** A Relay edge containing a `AccessoryLikeType` and its cursor. */
export type AccessoryLikeTypeEdge = {
  __typename?: 'AccessoryLikeTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AccessoryLikeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AccessoryReferenceyType = Node & {
  __typename?: 'AccessoryReferenceyType';
  /** The ID of the object. */
  id: Scalars['ID'];
  site: AccessorySiteType;
  accessoryIdInSite?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  accessoriesInRefrence: AccessoryTypeConnection;
};


export type AccessoryReferenceyTypeAccessoriesInRefrenceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
  name_Istartswith?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: Maybe<Scalars['String']>;
};

export type AccessoryReferenceyTypeConnection = {
  __typename?: 'AccessoryReferenceyTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessoryReferenceyTypeEdge>>;
};

/** A Relay edge containing a `AccessoryReferenceyType` and its cursor. */
export type AccessoryReferenceyTypeEdge = {
  __typename?: 'AccessoryReferenceyTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AccessoryReferenceyType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AccessoryRelatedInput = {
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  referenceLinks?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type AccessorySiteInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  serviceZone?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isWorldwide?: Maybe<Scalars['Boolean']>;
};

export type AccessorySiteType = Node & {
  __typename?: 'AccessorySiteType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  logo: Scalars['String'];
  serviceZone: CountryTypeConnection;
  isWorldwide: Scalars['Boolean'];
  accessoriesSite: AccessoryReferenceyTypeConnection;
};


export type AccessorySiteTypeServiceZoneArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alpha2?: Maybe<Scalars['String']>;
};


export type AccessorySiteTypeAccessoriesSiteArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  site?: Maybe<Scalars['ID']>;
  accessoryIdInSite?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
};

export type AccessorySiteTypeConnection = {
  __typename?: 'AccessorySiteTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessorySiteTypeEdge>>;
};

/** A Relay edge containing a `AccessorySiteType` and its cursor. */
export type AccessorySiteTypeEdge = {
  __typename?: 'AccessorySiteTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AccessorySiteType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AccessoryType = Node & {
  __typename?: 'AccessoryType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  imageLink?: Maybe<Scalars['String']>;
  likesCount: Scalars['Int'];
  brand?: Maybe<AccessoryBrandType>;
  category: AccessoryCategoryType;
  referenceLinks: AccessoryReferenceyTypeConnection;
  tripmodelSet: TripTypeConnection;
  plansAccessories: TripPlanTypeConnection;
  likesOfAccessory: AccessoryLikeTypeConnection;
  articleWithAccessory: ArticleTypeConnection;
  usersSavedAccessory: AccessoryCollectionsTypeConnection;
};


export type AccessoryTypeReferenceLinksArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  site?: Maybe<Scalars['ID']>;
  accessoryIdInSite?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
};


export type AccessoryTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type AccessoryTypePlansAccessoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title?: Maybe<Scalars['String']>;
};


export type AccessoryTypeLikesOfAccessoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  accessory?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
};


export type AccessoryTypeArticleWithAccessoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
};


export type AccessoryTypeUsersSavedAccessoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  accessory?: Maybe<Scalars['ID']>;
};

export type AccessoryTypeConnection = {
  __typename?: 'AccessoryTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccessoryTypeEdge>>;
};

/** A Relay edge containing a `AccessoryType` and its cursor. */
export type AccessoryTypeEdge = {
  __typename?: 'AccessoryTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AccessoryType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AccommodationCollectionsType = Node & {
  __typename?: 'AccommodationCollectionsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
};

export type AccommodationCollectionsTypeConnection = {
  __typename?: 'AccommodationCollectionsTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AccommodationCollectionsTypeEdge>>;
};

/** A Relay edge containing a `AccommodationCollectionsType` and its cursor. */
export type AccommodationCollectionsTypeEdge = {
  __typename?: 'AccommodationCollectionsTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AccommodationCollectionsType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AchivmentType = Node & {
  __typename?: 'AchivmentType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  image: Scalars['String'];
  profilemodelSet: ProfileTypeConnection;
};


export type AchivmentTypeProfilemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  about?: Maybe<Scalars['String']>;
};

export type AchivmentTypeConnection = {
  __typename?: 'AchivmentTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AchivmentTypeEdge>>;
};

/** A Relay edge containing a `AchivmentType` and its cursor. */
export type AchivmentTypeEdge = {
  __typename?: 'AchivmentTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<AchivmentType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type AddPlaceImages = {
  __typename?: 'AddPlaceImages';
  success?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<PlaceImageType>>>;
};

export type AddRelatedFieldToTripMutation = {
  __typename?: 'AddRelatedFieldToTripMutation';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  trip?: Maybe<TripType>;
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: 'ArchiveAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type ArticleCategoryType = Node & {
  __typename?: 'ArticleCategoryType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  svg: Scalars['String'];
  image: Scalars['String'];
  articlesOfCategory: ArticleTypeConnection;
};


export type ArticleCategoryTypeArticlesOfCategoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
};

export type ArticleCategoryTypeConnection = {
  __typename?: 'ArticleCategoryTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleCategoryTypeEdge>>;
};

/** A Relay edge containing a `ArticleCategoryType` and its cursor. */
export type ArticleCategoryTypeEdge = {
  __typename?: 'ArticleCategoryTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ArticleCategoryType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ArticleReviewLikeType = Node & {
  __typename?: 'ArticleReviewLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  article: ArticleType;
  user: UserType;
};

export type ArticleReviewLikeTypeConnection = {
  __typename?: 'ArticleReviewLikeTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleReviewLikeTypeEdge>>;
};

/** A Relay edge containing a `ArticleReviewLikeType` and its cursor. */
export type ArticleReviewLikeTypeEdge = {
  __typename?: 'ArticleReviewLikeTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ArticleReviewLikeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ArticleReviewType = Node & {
  __typename?: 'ArticleReviewType';
  /** The ID of the object. */
  id: Scalars['ID'];
  article: ArticleType;
  author: UserType;
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type ArticleReviewTypeConnection = {
  __typename?: 'ArticleReviewTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleReviewTypeEdge>>;
};

/** A Relay edge containing a `ArticleReviewType` and its cursor. */
export type ArticleReviewTypeEdge = {
  __typename?: 'ArticleReviewTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ArticleReviewType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ArticleType = Node & {
  __typename?: 'ArticleType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  likes: Scalars['Int'];
  timeToRead?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  author: UserType;
  category?: Maybe<ArticleCategoryType>;
  activities: TripActivitieTypeConnection;
  places: PlaceTypeConnection;
  accessories: AccessoryTypeConnection;
  countries: CountryTypeConnection;
  reviewsOfArticle: ArticleReviewTypeConnection;
  likesOfArticle: ArticleReviewLikeTypeConnection;
};


export type ArticleTypeActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type ArticleTypePlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_Iexact?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  city_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_Name_Iexact?: Maybe<Scalars['String']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province?: Maybe<Scalars['ID']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  type_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['ID']>;
  type_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_Title_Iexact?: Maybe<Scalars['String']>;
};


export type ArticleTypeAccessoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
  name_Istartswith?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: Maybe<Scalars['String']>;
};


export type ArticleTypeCountriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alpha2?: Maybe<Scalars['String']>;
};


export type ArticleTypeReviewsOfArticleArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  article?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};


export type ArticleTypeLikesOfArticleArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  article?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
};

export type ArticleTypeConnection = {
  __typename?: 'ArticleTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleTypeEdge>>;
};

/** A Relay edge containing a `ArticleType` and its cursor. */
export type ArticleTypeEdge = {
  __typename?: 'ArticleTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ArticleType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ChangePasswordMutation = {
  __typename?: 'ChangePasswordMutation';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type ChangeUsernameMutation = {
  __typename?: 'ChangeUsernameMutation';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  username?: Maybe<Scalars['String']>;
};

export type CityType = Node & {
  __typename?: 'CityType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  longitude: Scalars['Decimal'];
  latitude: Scalars['Decimal'];
  province: ProvinceType;
  country: CountryType;
  toursOfCity: TourTypeConnection;
  tripsOfCity: TripTypeConnection;
  placesOfCity: PlaceTypeConnection;
  transferSrc: TransferTypeConnection;
  transferDest: TransferTypeConnection;
};


export type CityTypeToursOfCityArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  published?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  discountPrice?: Maybe<Scalars['Float']>;
  capacity?: Maybe<Scalars['Int']>;
  capacityLeft?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['ID']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  provinces?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type CityTypeTripsOfCityArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type CityTypePlacesOfCityArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_Iexact?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  city_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_Name_Iexact?: Maybe<Scalars['String']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province?: Maybe<Scalars['ID']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  type_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['ID']>;
  type_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_Title_Iexact?: Maybe<Scalars['String']>;
};


export type CityTypeTransferSrcArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
  transferType?: Maybe<Scalars['ID']>;
  duration?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
};


export type CityTypeTransferDestArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
  transferType?: Maybe<Scalars['ID']>;
  duration?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
};

export type CityTypeConnection = {
  __typename?: 'CityTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CityTypeEdge>>;
};

/** A Relay edge containing a `CityType` and its cursor. */
export type CityTypeEdge = {
  __typename?: 'CityTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CityType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CountryType = Node & {
  __typename?: 'CountryType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  alpha2: Scalars['String'];
  tourmodelSet: TourTypeConnection;
  tripsOfCountry: TripTypeConnection;
  plansCountry: TripPlanTypeConnection;
  provincesOfCountry: ProvinceTypeConnection;
  citiesOfCountry: CityTypeConnection;
  placesOfCountry: PlaceTypeConnection;
  accessoriesServiceZone: AccessorySiteTypeConnection;
  articlesOfCountry: ArticleTypeConnection;
};


export type CountryTypeTourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  published?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  discountPrice?: Maybe<Scalars['Float']>;
  capacity?: Maybe<Scalars['Int']>;
  capacityLeft?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['ID']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  provinces?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type CountryTypeTripsOfCountryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type CountryTypePlansCountryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title?: Maybe<Scalars['String']>;
};


export type CountryTypeProvincesOfCountryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['ID']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CountryTypeCitiesOfCountryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['ID']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province?: Maybe<Scalars['ID']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CountryTypePlacesOfCountryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_Iexact?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  city_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_Name_Iexact?: Maybe<Scalars['String']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province?: Maybe<Scalars['ID']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  type_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['ID']>;
  type_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_Title_Iexact?: Maybe<Scalars['String']>;
};


export type CountryTypeAccessoriesServiceZoneArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type CountryTypeArticlesOfCountryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
};

export type CountryTypeConnection = {
  __typename?: 'CountryTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CountryTypeEdge>>;
};

/** A Relay edge containing a `CountryType` and its cursor. */
export type CountryTypeEdge = {
  __typename?: 'CountryTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<CountryType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type CreateAccessoryBrandMutation = {
  __typename?: 'CreateAccessoryBrandMutation';
  brand?: Maybe<AccessoryBrandType>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type CreateAccessoryCategoryMutation = {
  __typename?: 'CreateAccessoryCategoryMutation';
  brand?: Maybe<AccessoryCategoryType>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** create accessory mutation */
export type CreateAccessoryMutation = {
  __typename?: 'CreateAccessoryMutation';
  accessory?: Maybe<AccessoryType>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type CreateAccessorySiteMutation = {
  __typename?: 'CreateAccessorySiteMutation';
  site?: Maybe<AccessorySiteType>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type CreateExperienceMutation = {
  __typename?: 'CreateExperienceMutation';
  experience?: Maybe<ExperienceType>;
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type CreatePlace = {
  __typename?: 'CreatePlace';
  place?: Maybe<PlaceType>;
};

/** create tour mutation */
export type CreateTour = {
  __typename?: 'CreateTour';
  place?: Maybe<PlaceType>;
};

/** create review for tour mutation */
export type CreateTourReview = {
  __typename?: 'CreateTourReview';
  tourReview?: Maybe<TourReviewType>;
};

export type CreateTransferMutation = {
  __typename?: 'CreateTransferMutation';
  transfer?: Maybe<TransferType>;
  success?: Maybe<Scalars['Boolean']>;
};

/** create trip mutation. */
export type CreateTrip = {
  __typename?: 'CreateTrip';
  trip?: Maybe<TripType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateTripImages = {
  __typename?: 'CreateTripImages';
  success?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<TripImageType>>>;
};

export type CreateTripLike = {
  __typename?: 'CreateTripLike';
  success?: Maybe<Scalars['Boolean']>;
  like?: Maybe<Scalars['Boolean']>;
  trip?: Maybe<TripType>;
};

export type CreateTripPlan = {
  __typename?: 'CreateTripPlan';
  plan?: Maybe<TripPlanType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateTripReviewInput = {
  tripId: Scalars['ID'];
  description: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTripReviewPayload = {
  __typename?: 'CreateTripReviewPayload';
  review?: Maybe<TripReviewType>;
  success?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTripStaticsMutation = {
  __typename?: 'CreateTripStaticsMutation';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  trip?: Maybe<TripType>;
};




/**
 * Delete account permanently or make `user.is_active=False`.
 *
 * The behavior is defined on settings.
 * Anyway user refresh tokens are revoked.
 *
 * User must be verified and confirm password.
 */
export type DeleteAccount = {
  __typename?: 'DeleteAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type DeleteExperienceMutation = {
  __typename?: 'DeleteExperienceMutation';
  success?: Maybe<Scalars['Boolean']>;
};

export type DeletePlace = {
  __typename?: 'DeletePlace';
  deleted?: Maybe<Scalars['Boolean']>;
};

/** delete tour mutation.  */
export type DeleteTour = {
  __typename?: 'DeleteTour';
  deleted?: Maybe<Scalars['Boolean']>;
};

/** delete tour review mutation.  */
export type DeleteTourReview = {
  __typename?: 'DeleteTourReview';
  deleted?: Maybe<Scalars['Boolean']>;
};

export type DeleteTransferMutation = {
  __typename?: 'DeleteTransferMutation';
  success?: Maybe<Scalars['Boolean']>;
};

/** delete trip mutation. */
export type DeleteTrip = {
  __typename?: 'DeleteTrip';
  deleted?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type DeleteTripImage = {
  __typename?: 'DeleteTripImage';
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  success?: Maybe<Scalars['Boolean']>;
};

/** delete trip plan mutation. */
export type DeleteTripPlan = {
  __typename?: 'DeleteTripPlan';
  deleted?: Maybe<Scalars['Boolean']>;
};

/** delete trip review mutation. */
export type DeleteTripReview = {
  __typename?: 'DeleteTripReview';
  deleted?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type DisLikeTripReviewMutation = {
  __typename?: 'DisLikeTripReviewMutation';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  tripReviewLike?: Maybe<TripReviewLikeType>;
};

export type DiscountCollectionsType = Node & {
  __typename?: 'DiscountCollectionsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  discount: DiscountType;
};

export type DiscountCollectionsTypeConnection = {
  __typename?: 'DiscountCollectionsTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DiscountCollectionsTypeEdge>>;
};

/** A Relay edge containing a `DiscountCollectionsType` and its cursor. */
export type DiscountCollectionsTypeEdge = {
  __typename?: 'DiscountCollectionsTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<DiscountCollectionsType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type DiscountType = Node & {
  __typename?: 'DiscountType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  isPercentageBase: Scalars['Boolean'];
  percentage?: Maybe<Scalars['Int']>;
  ceiling: Scalars['Decimal'];
  amount: Scalars['Decimal'];
  expiration?: Maybe<Scalars['Date']>;
  type: DiscountTypeType;
  usersSavedDiscount: DiscountCollectionsTypeConnection;
};


export type DiscountTypeUsersSavedDiscountArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  discount?: Maybe<Scalars['ID']>;
};

export type DiscountTypeConnection = {
  __typename?: 'DiscountTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DiscountTypeEdge>>;
};

/** A Relay edge containing a `DiscountType` and its cursor. */
export type DiscountTypeEdge = {
  __typename?: 'DiscountTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<DiscountType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type DiscountTypeType = Node & {
  __typename?: 'DiscountTypeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  typeName: Scalars['String'];
  discountsOfType: DiscountTypeConnection;
};


export type DiscountTypeTypeDiscountsOfTypeArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  isPercentageBase?: Maybe<Scalars['Boolean']>;
  percentage?: Maybe<Scalars['Int']>;
  ceiling?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  expiration?: Maybe<Scalars['Date']>;
  type?: Maybe<Scalars['ID']>;
};


export type ExperienceCollectionsType = Node & {
  __typename?: 'ExperienceCollectionsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  experience: ExperienceType;
};

export type ExperienceCollectionsTypeConnection = {
  __typename?: 'ExperienceCollectionsTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExperienceCollectionsTypeEdge>>;
};

/** A Relay edge containing a `ExperienceCollectionsType` and its cursor. */
export type ExperienceCollectionsTypeEdge = {
  __typename?: 'ExperienceCollectionsTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ExperienceCollectionsType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ExperienceImageType = Node & {
  __typename?: 'ExperienceImageType';
  /** The ID of the object. */
  id: Scalars['ID'];
  image: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  copyrightName?: Maybe<Scalars['String']>;
  user: UserType;
  experiencemodelSet: ExperienceTypeConnection;
};


export type ExperienceImageTypeExperiencemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  place?: Maybe<Scalars['ID']>;
};

export type ExperienceImageTypeConnection = {
  __typename?: 'ExperienceImageTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExperienceImageTypeEdge>>;
};

/** A Relay edge containing a `ExperienceImageType` and its cursor. */
export type ExperienceImageTypeEdge = {
  __typename?: 'ExperienceImageTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ExperienceImageType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ExperienceInput = {
  title: Scalars['String'];
  description: Scalars['String'];
};

export type ExperienceInputUpdate = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ExperienceRelatedInputs = {
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  video?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ExperienceType = Node & {
  __typename?: 'ExperienceType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  defaultImage: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  author: UserType;
  place: PlaceType;
  activities: TripActivitieTypeConnection;
  images: ExperienceImageTypeConnection;
  videos: ExperienceVideoTypeConnection;
  tripmodelSet: TripTypeConnection;
  usersSavedExperience: ExperienceCollectionsTypeConnection;
};


export type ExperienceTypeActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type ExperienceTypeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ExperienceTypeVideosArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ExperienceTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type ExperienceTypeUsersSavedExperienceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  experience?: Maybe<Scalars['ID']>;
};

export type ExperienceTypeConnection = {
  __typename?: 'ExperienceTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExperienceTypeEdge>>;
};

/** A Relay edge containing a `ExperienceType` and its cursor. */
export type ExperienceTypeEdge = {
  __typename?: 'ExperienceTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ExperienceType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ExperienceVideoType = Node & {
  __typename?: 'ExperienceVideoType';
  /** The ID of the object. */
  id: Scalars['ID'];
  video: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  copyrightName?: Maybe<Scalars['String']>;
  user: UserType;
  experiencemodelSet: ExperienceTypeConnection;
};


export type ExperienceVideoTypeExperiencemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  place?: Maybe<Scalars['ID']>;
};

export type ExperienceVideoTypeConnection = {
  __typename?: 'ExperienceVideoTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ExperienceVideoTypeEdge>>;
};

/** A Relay edge containing a `ExperienceVideoType` and its cursor. */
export type ExperienceVideoTypeEdge = {
  __typename?: 'ExperienceVideoTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ExperienceVideoType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type FollowOrUnfollowInput = {
  followedId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type FollowOrUnfollowPayload = {
  __typename?: 'FollowOrUnfollowPayload';
  followStatus?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type FollowingType = Node & {
  __typename?: 'FollowingType';
  /** The ID of the object. */
  id: Scalars['ID'];
  follower: UserType;
  followed: UserType;
  dateFollowed: Scalars['DateTime'];
};

export type FollowingTypeConnection = {
  __typename?: 'FollowingTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FollowingTypeEdge>>;
};

/** A Relay edge containing a `FollowingType` and its cursor. */
export type FollowingTypeEdge = {
  __typename?: 'FollowingTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<FollowingType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** send forgotten passworld sms verification */
export type ForgotPasswordSms = {
  __typename?: 'ForgotPasswordSMS';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};



export type LikeTripReviewMutation = {
  __typename?: 'LikeTripReviewMutation';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  tripReviewLike?: Maybe<TripReviewLikeType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  saveTrip?: Maybe<SaveTripMutation>;
  savePlace?: Maybe<SavePlaceMutation>;
  saveExperience?: Maybe<SaveExperienceMutation>;
  saveTour?: Maybe<SaveTourMutation>;
  saveAccommodation?: Maybe<SaveAccommodationMutation>;
  saveAccessory?: Maybe<SaveAccessoryMutation>;
  createTransfer?: Maybe<CreateTransferMutation>;
  deleteTransfer?: Maybe<DeleteTransferMutation>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordReset>;
  /**
   * Set user password - for passwordless registration
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, set
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordSet?: Maybe<PasswordSet>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  /**
   * Delete account permanently or make `user.is_active=False`.
   *
   * The behavior is defined on settings.
   * Anyway user refresh tokens are revoked.
   *
   * User must be verified and confirm password.
   */
  deleteAccount?: Maybe<DeleteAccount>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  updateProfile?: Maybe<UpdateProfilePayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  followOrUnfollow?: Maybe<FollowOrUnfollowPayload>;
  /** Social Auth Mutation for Relay */
  socialAuth?: Maybe<SocialAuthPayload>;
  /** Register user and send verification code */
  registerSms?: Maybe<RegisterSms>;
  /** Verify user using verification code that send with sms */
  verifySms?: Maybe<VerifySms>;
  /** Resend sms to user */
  resendVerificationSms?: Maybe<ResendVerificationSms>;
  /** reset password */
  resetPasswordSms?: Maybe<ResetPasswordSms>;
  /** send forgotten passworld sms verification */
  forgotPasswordSms?: Maybe<ForgotPasswordSms>;
  passwordChange?: Maybe<ChangePasswordMutation>;
  changeUsername?: Maybe<ChangeUsernameMutation>;
  createTripPlan?: Maybe<CreateTripPlan>;
  /** delete trip plan mutation. */
  deleteTripPlan?: Maybe<DeleteTripPlan>;
  updateTripPlan?: Maybe<UpdateTripPlan>;
  /** create accessory mutation */
  createAccessory?: Maybe<CreateAccessoryMutation>;
  createAccessoryCategory?: Maybe<CreateAccessoryCategoryMutation>;
  createAccessoryBrand?: Maybe<CreateAccessoryBrandMutation>;
  createAccessorySite?: Maybe<CreateAccessorySiteMutation>;
  createExperience?: Maybe<CreateExperienceMutation>;
  updateExperience?: Maybe<UpdateExperienceMutation>;
  deleteExperience?: Maybe<DeleteExperienceMutation>;
  /** create tour mutation */
  createTour?: Maybe<CreateTour>;
  /** create review for tour mutation */
  createTourReview?: Maybe<CreateTourReview>;
  /** user register to tour mutation.  */
  userRegisterTour?: Maybe<RegisterTourMutation>;
  /** delete tour mutation.  */
  deleteTour?: Maybe<DeleteTour>;
  /** delete tour review mutation.  */
  deleteTourReview?: Maybe<DeleteTourReview>;
  /** unregister user from tour mutation.  */
  userUnregisterTour?: Maybe<UnRegisterTourMutation>;
  createPlace?: Maybe<CreatePlace>;
  addPlaceImages?: Maybe<AddPlaceImages>;
  deletePlace?: Maybe<DeletePlace>;
  /** create trip mutation. */
  createTrip?: Maybe<CreateTrip>;
  createTripWithStatics?: Maybe<CreateTripStaticsMutation>;
  addRelatedFieldToTrip?: Maybe<AddRelatedFieldToTripMutation>;
  createTripLike?: Maybe<CreateTripLike>;
  createTripReview?: Maybe<CreateTripReviewPayload>;
  createTripImages?: Maybe<CreateTripImages>;
  likeTripReview?: Maybe<LikeTripReviewMutation>;
  dislikeTripReview?: Maybe<DisLikeTripReviewMutation>;
  publishTrip?: Maybe<PublishTripMutation>;
  undoPublishTrip?: Maybe<UnPublishTripMutation>;
  /** update trip review mutation. */
  updateTrip?: Maybe<UpdateTrip>;
  /** update trip review mutation. */
  updateTripReview?: Maybe<UpdateTripReview>;
  /** delete trip mutation. */
  deleteTrip?: Maybe<DeleteTrip>;
  /** delete trip review mutation. */
  deleteTripReview?: Maybe<DeleteTripReview>;
  deleteTripImage?: Maybe<DeleteTripImage>;
};


export type MutationSaveTripArgs = {
  trip?: Maybe<Scalars['ID']>;
};


export type MutationSavePlaceArgs = {
  place?: Maybe<Scalars['ID']>;
};


export type MutationSaveExperienceArgs = {
  experience?: Maybe<Scalars['ID']>;
};


export type MutationSaveTourArgs = {
  tour?: Maybe<Scalars['ID']>;
};


export type MutationSaveAccommodationArgs = {
  accommodation?: Maybe<Scalars['ID']>;
};


export type MutationSaveAccessoryArgs = {
  accessory?: Maybe<Scalars['ID']>;
};


export type MutationCreateTransferArgs = {
  destination: Scalars['ID'];
  src: Scalars['ID'];
  transferInput?: Maybe<TransferInput>;
  transferType: Scalars['ID'];
};


export type MutationDeleteTransferArgs = {
  transferId: Scalars['ID'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  username: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};


export type MutationResendActivationEmailArgs = {
  email: Scalars['String'];
};


export type MutationSendPasswordResetEmailArgs = {
  email: Scalars['String'];
};


export type MutationPasswordResetArgs = {
  token: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};


export type MutationPasswordSetArgs = {
  token: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};


export type MutationArchiveAccountArgs = {
  password: Scalars['String'];
};


export type MutationDeleteAccountArgs = {
  password: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token: Scalars['String'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRevokeTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  password: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationFollowOrUnfollowArgs = {
  input: FollowOrUnfollowInput;
};


export type MutationSocialAuthArgs = {
  input: SocialAuthInput;
};


export type MutationRegisterSmsArgs = {
  password1: Scalars['String'];
  password2: Scalars['String'];
  phoneNumber: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};


export type MutationVerifySmsArgs = {
  code: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type MutationResendVerificationSmsArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationResetPasswordSmsArgs = {
  code: Scalars['String'];
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  phoneNumber: Scalars['String'];
};


export type MutationForgotPasswordSmsArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationPasswordChangeArgs = {
  newPassword1: Scalars['String'];
  newPassword2: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationChangeUsernameArgs = {
  username: Scalars['String'];
};


export type MutationCreateTripPlanArgs = {
  planInput: TripPlanInput;
  planRelatedInput: TripPlanRelatedInput;
};


export type MutationDeleteTripPlanArgs = {
  tripPlanId: Scalars['ID'];
};


export type MutationUpdateTripPlanArgs = {
  planInput: TripPlanInput;
  planRelatedInput?: Maybe<TripPlanRelatedInput>;
  tripPlanId?: Maybe<Scalars['ID']>;
};


export type MutationCreateAccessoryArgs = {
  accessory: AccessoryInput;
  accessoryRelated?: Maybe<AccessoryRelatedInput>;
};


export type MutationCreateAccessoryCategoryArgs = {
  category: AccessoryCategoryInput;
};


export type MutationCreateAccessoryBrandArgs = {
  brand: AccessoryBrandInput;
};


export type MutationCreateAccessorySiteArgs = {
  site: AccessorySiteInput;
};


export type MutationCreateExperienceArgs = {
  experienceInput: ExperienceInput;
  experienceRelatedInput?: Maybe<ExperienceRelatedInputs>;
  place: Scalars['ID'];
};


export type MutationUpdateExperienceArgs = {
  experienceId: Scalars['ID'];
  experienceInput?: Maybe<ExperienceInputUpdate>;
  experienceRelatedInput?: Maybe<ExperienceRelatedInputs>;
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['ID'];
};


export type MutationCreateTourArgs = {
  tourData: TourInput;
};


export type MutationCreateTourReviewArgs = {
  tourReviewInput: TourReviewInput;
};


export type MutationDeleteTourArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTourReviewArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePlaceArgs = {
  placeData: PlaceInput;
};


export type MutationAddPlaceImagesArgs = {
  placeId: Scalars['ID'];
  uploadedImages?: Maybe<Array<Maybe<PlaceImageInputType>>>;
};


export type MutationDeletePlaceArgs = {
  placeId?: Maybe<Scalars['ID']>;
};


export type MutationCreateTripArgs = {
  country: Scalars['ID'];
  province: Scalars['ID'];
  tripInput: TripInput;
  tripRelatedInput: TripRelatedInput;
};


export type MutationCreateTripWithStaticsArgs = {
  country: Scalars['ID'];
  province: Scalars['ID'];
  trip: TripInput;
};


export type MutationAddRelatedFieldToTripArgs = {
  fieldName: Scalars['String'];
  fieldValue: Scalars['ID'];
  trip: Scalars['ID'];
};


export type MutationCreateTripLikeArgs = {
  tripId: Scalars['ID'];
};


export type MutationCreateTripReviewArgs = {
  input: CreateTripReviewInput;
};


export type MutationCreateTripImagesArgs = {
  uploadedImages?: Maybe<Array<Maybe<TripImageInputType>>>;
};


export type MutationLikeTripReviewArgs = {
  review: Scalars['ID'];
};


export type MutationDislikeTripReviewArgs = {
  review: Scalars['ID'];
};


export type MutationPublishTripArgs = {
  tripId: Scalars['ID'];
};


export type MutationUndoPublishTripArgs = {
  tripId: Scalars['ID'];
};


export type MutationUpdateTripArgs = {
  country?: Maybe<Scalars['ID']>;
  province?: Maybe<Scalars['ID']>;
  removeTripRelatedData?: Maybe<TripRelatedInput>;
  tripData?: Maybe<UpdateTripInput>;
  tripId: Scalars['ID'];
  tripRelatedData?: Maybe<TripRelatedInput>;
};


export type MutationUpdateTripReviewArgs = {
  description?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  tripReviewId: Scalars['ID'];
};


export type MutationDeleteTripArgs = {
  tripId: Scalars['ID'];
};


export type MutationDeleteTripReviewArgs = {
  tripReviewId: Scalars['ID'];
};


export type MutationDeleteTripImageArgs = {
  imageId?: Maybe<Scalars['ID']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

export type NotificationType = {
  __typename?: 'NotificationType';
  id: Scalars['ID'];
  user?: Maybe<UserType>;
  toAll: Scalars['Boolean'];
  text: Scalars['String'];
  dateTime: Scalars['DateTime'];
  red: Scalars['Boolean'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  token?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  user?: Maybe<UserNode>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  refreshToken?: Maybe<Scalars['String']>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/**
 * Set user password - for passwordless registration
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, set
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordSet = {
  __typename?: 'PasswordSet';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type PlaceCollectionsType = Node & {
  __typename?: 'PlaceCollectionsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  place: PlaceType;
};

export type PlaceCollectionsTypeConnection = {
  __typename?: 'PlaceCollectionsTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlaceCollectionsTypeEdge>>;
};

/** A Relay edge containing a `PlaceCollectionsType` and its cursor. */
export type PlaceCollectionsTypeEdge = {
  __typename?: 'PlaceCollectionsTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PlaceCollectionsType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An enumeration. */
export enum PlaceFeelFeel {
  /** Unwell */
  A_1 = 'A_1',
  /** Apathetic */
  A_2 = 'A_2',
  /** Happy */
  A_3 = 'A_3',
  /** Excited */
  A_4 = 'A_4'
}

export type PlaceFeelType = Node & {
  __typename?: 'PlaceFeelType';
  /** The ID of the object. */
  id: Scalars['ID'];
  place: PlaceType;
  user: UserType;
  feel: PlaceFeelFeel;
};

export type PlaceFeelTypeConnection = {
  __typename?: 'PlaceFeelTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlaceFeelTypeEdge>>;
};

/** A Relay edge containing a `PlaceFeelType` and its cursor. */
export type PlaceFeelTypeEdge = {
  __typename?: 'PlaceFeelTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PlaceFeelType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PlaceImageInputType = {
  description?: Maybe<Scalars['String']>;
  image: Scalars['Upload'];
  subject: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type PlaceImageType = Node & {
  __typename?: 'PlaceImageType';
  /** The ID of the object. */
  id: Scalars['ID'];
  image: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  user: UserType;
  copyrightName?: Maybe<Scalars['String']>;
  placemodelSet: PlaceTypeConnection;
};


export type PlaceImageTypePlacemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_Iexact?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  city_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_Name_Iexact?: Maybe<Scalars['String']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province?: Maybe<Scalars['ID']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  type_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['ID']>;
  type_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_Title_Iexact?: Maybe<Scalars['String']>;
};

export type PlaceImageTypeConnection = {
  __typename?: 'PlaceImageTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlaceImageTypeEdge>>;
};

/** A Relay edge containing a `PlaceImageType` and its cursor. */
export type PlaceImageTypeEdge = {
  __typename?: 'PlaceImageTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PlaceImageType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PlaceInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type PlaceType = Node & {
  __typename?: 'PlaceType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  nameEn?: Maybe<Scalars['String']>;
  nameFa?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionFa?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['Decimal']>;
  latitude?: Maybe<Scalars['Decimal']>;
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  defaultImage: Scalars['String'];
  facilities?: Maybe<Scalars['JSONString']>;
  openHours?: Maybe<Scalars['JSONString']>;
  googleId?: Maybe<Scalars['String']>;
  feelsSum: Scalars['Int'];
  feelsCount: Scalars['Int'];
  feelAverage: Scalars['Int'];
  province: ProvinceType;
  country: CountryType;
  city: CityType;
  images: PlaceImageTypeConnection;
  type?: Maybe<PlaceTypeType>;
  activities: TripActivitieTypeConnection;
  videos: PlaceVideoTypeConnection;
  toursPlaces: TourTypeConnection;
  tripsInPlace: TripTypeConnection;
  plansPlaces: TripPlanTypeConnection;
  feelsOfPlace: PlaceFeelTypeConnection;
  articlesInPlace: ArticleTypeConnection;
  usersSavedPlace: PlaceCollectionsTypeConnection;
  experiencesOfPlace: ExperienceTypeConnection;
};


export type PlaceTypeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PlaceTypeActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type PlaceTypeVideosArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type PlaceTypeToursPlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  published?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  discountPrice?: Maybe<Scalars['Float']>;
  capacity?: Maybe<Scalars['Int']>;
  capacityLeft?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['ID']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  provinces?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type PlaceTypeTripsInPlaceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type PlaceTypePlansPlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title?: Maybe<Scalars['String']>;
};


export type PlaceTypeFeelsOfPlaceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  place?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
  feel?: Maybe<Scalars['String']>;
};


export type PlaceTypeArticlesInPlaceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
};


export type PlaceTypeUsersSavedPlaceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  place?: Maybe<Scalars['ID']>;
};


export type PlaceTypeExperiencesOfPlaceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  place?: Maybe<Scalars['ID']>;
};

export type PlaceTypeConnection = {
  __typename?: 'PlaceTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlaceTypeEdge>>;
};

/** A Relay edge containing a `PlaceType` and its cursor. */
export type PlaceTypeEdge = {
  __typename?: 'PlaceTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PlaceType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PlaceTypeType = Node & {
  __typename?: 'PlaceTypeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  titleEn?: Maybe<Scalars['String']>;
  titleFa?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionFa?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  svg: Scalars['String'];
  placesOfType: PlaceTypeConnection;
};


export type PlaceTypeTypePlacesOfTypeArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_Iexact?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  city_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_Name_Iexact?: Maybe<Scalars['String']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province?: Maybe<Scalars['ID']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  type_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['ID']>;
  type_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_Title_Iexact?: Maybe<Scalars['String']>;
};

export type PlaceTypeTypeConnection = {
  __typename?: 'PlaceTypeTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlaceTypeTypeEdge>>;
};

/** A Relay edge containing a `PlaceTypeType` and its cursor. */
export type PlaceTypeTypeEdge = {
  __typename?: 'PlaceTypeTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PlaceTypeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PlaceVideoType = Node & {
  __typename?: 'PlaceVideoType';
  /** The ID of the object. */
  id: Scalars['ID'];
  video: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  user: UserType;
  copyrightName?: Maybe<Scalars['String']>;
  placemodelSet: PlaceTypeConnection;
};


export type PlaceVideoTypePlacemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_Iexact?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  city_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_Name_Iexact?: Maybe<Scalars['String']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province?: Maybe<Scalars['ID']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  type_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['ID']>;
  type_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_Title_Iexact?: Maybe<Scalars['String']>;
};

export type PlaceVideoTypeConnection = {
  __typename?: 'PlaceVideoTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PlaceVideoTypeEdge>>;
};

/** A Relay edge containing a `PlaceVideoType` and its cursor. */
export type PlaceVideoTypeEdge = {
  __typename?: 'PlaceVideoTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<PlaceVideoType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProfileInputType = {
  about?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['Upload']>;
  tripStatus?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['String']>;
};

/** An enumeration. */
export enum ProfileModelGender {
  /** male */
  M = 'M',
  /** female */
  F = 'F',
  /** non binary */
  O = 'O'
}

export type ProfileType = Node & {
  __typename?: 'ProfileType';
  user?: Maybe<UserType>;
  about?: Maybe<Scalars['String']>;
  tripStatus?: Maybe<Scalars['Boolean']>;
  header?: Maybe<Scalars['String']>;
  gender?: Maybe<ProfileModelGender>;
  followersCount: Scalars['Int'];
  followingsCount: Scalars['Int'];
  achievements: AchivmentTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID'];
};


export type ProfileTypeAchievementsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ProfileTypeConnection = {
  __typename?: 'ProfileTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProfileTypeEdge>>;
};

/** A Relay edge containing a `ProfileType` and its cursor. */
export type ProfileTypeEdge = {
  __typename?: 'ProfileTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProfileType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ProvinceType = Node & {
  __typename?: 'ProvinceType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  longitude: Scalars['Decimal'];
  latitude: Scalars['Decimal'];
  country: CountryType;
  toursOfProvince: TourTypeConnection;
  tripsOfProvince: TripTypeConnection;
  citiesOfProvince: CityTypeConnection;
  placesOfProvince: PlaceTypeConnection;
};


export type ProvinceTypeToursOfProvinceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  published?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  discountPrice?: Maybe<Scalars['Float']>;
  capacity?: Maybe<Scalars['Int']>;
  capacityLeft?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['ID']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  provinces?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProvinceTypeTripsOfProvinceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type ProvinceTypeCitiesOfProvinceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['ID']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province?: Maybe<Scalars['ID']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ProvinceTypePlacesOfProvinceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_Iexact?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  city_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_Name_Iexact?: Maybe<Scalars['String']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province?: Maybe<Scalars['ID']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  type_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['ID']>;
  type_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_Title_Iexact?: Maybe<Scalars['String']>;
};

export type ProvinceTypeConnection = {
  __typename?: 'ProvinceTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProvinceTypeEdge>>;
};

/** A Relay edge containing a `ProvinceType` and its cursor. */
export type ProvinceTypeEdge = {
  __typename?: 'ProvinceTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProvinceType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PublishTripMutation = {
  __typename?: 'PublishTripMutation';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  trip?: Maybe<TripType>;
};

export type Query = {
  __typename?: 'Query';
  /** The ID of the object */
  notification?: Maybe<NotificationType>;
  notificationsCount?: Maybe<Scalars['Int']>;
  /** The ID of the object */
  transfer?: Maybe<TransferType>;
  allTransfer?: Maybe<TransferTypeConnection>;
  /** The ID of the object */
  transferType?: Maybe<TransferTypeType>;
  allTransferType?: Maybe<TransferTypeTypeConnection>;
  /** The ID of the object */
  tripPlan?: Maybe<TripPlanType>;
  allTripPlan?: Maybe<TripPlanTypeConnection>;
  /** The ID of the object */
  myTripPlans?: Maybe<TripPlanType>;
  allMyTripPlans?: Maybe<TripPlanTypeConnection>;
  me?: Maybe<UserType>;
  user?: Maybe<UserType>;
  allUsers?: Maybe<UserTypeConnection>;
  /** The ID of the object */
  profile?: Maybe<ProfileType>;
  allProfile?: Maybe<ProfileTypeConnection>;
  followedUser?: Maybe<Scalars['Boolean']>;
  followers?: Maybe<FollowingTypeConnection>;
  following?: Maybe<FollowingTypeConnection>;
  /** The ID of the object */
  tourCollection?: Maybe<TourCollectionsType>;
  /** The ID of the object */
  placeCollection?: Maybe<PlaceCollectionsType>;
  myTourCollection?: Maybe<PlaceCollectionsTypeConnection>;
  /** The ID of the object */
  accessoryCollection?: Maybe<AccessoryCollectionsType>;
  myAccessoryCollection?: Maybe<AccessoryCollectionsTypeConnection>;
  /** The ID of the object */
  tripCollection?: Maybe<TripCollectionsType>;
  myTripCollection?: Maybe<TripCollectionsTypeConnection>;
  /** The ID of the object */
  discountCollection?: Maybe<DiscountCollectionsType>;
  myDiscountCollection?: Maybe<DiscountCollectionsTypeConnection>;
  /** The ID of the object */
  experience?: Maybe<ExperienceType>;
  allExperience?: Maybe<ExperienceTypeConnection>;
  /** The ID of the object */
  myExperiences?: Maybe<ExperienceType>;
  allMyExperiences?: Maybe<ExperienceTypeConnection>;
  /** The ID of the object */
  article?: Maybe<ArticleType>;
  allArticle?: Maybe<ArticleTypeConnection>;
  /** The ID of the object */
  articleCategory?: Maybe<ArticleCategoryType>;
  allArticleCategories?: Maybe<ArticleCategoryTypeConnection>;
  /** The ID of the object */
  accessory?: Maybe<AccessoryType>;
  allAccessory?: Maybe<AccessoryTypeConnection>;
  /** The ID of the object */
  accessoryCategory?: Maybe<AccessoryCategoryType>;
  allAccessoryCategories?: Maybe<AccessoryCategoryTypeConnection>;
  /** The ID of the object */
  accessorySite?: Maybe<AccessorySiteType>;
  allAccessorySite?: Maybe<AccessorySiteTypeConnection>;
  /** The ID of the object */
  accessoryBrand?: Maybe<AccessoryBrandType>;
  allAccessoryBrand?: Maybe<AccessoryBrandTypeConnection>;
  /** The ID of the object */
  place?: Maybe<PlaceType>;
  allPlace?: Maybe<PlaceTypeConnection>;
  /** The ID of the object */
  placeCategory?: Maybe<PlaceTypeType>;
  allPlaceCategory?: Maybe<PlaceTypeTypeConnection>;
  /** The ID of the object */
  country?: Maybe<CountryType>;
  allCountries?: Maybe<CountryTypeConnection>;
  /** The ID of the object */
  city?: Maybe<CityType>;
  allCities?: Maybe<CityTypeConnection>;
  /** The ID of the object */
  province?: Maybe<ProvinceType>;
  allProvinces?: Maybe<ProvinceTypeConnection>;
  /** The ID of the object */
  tour?: Maybe<TourType>;
  allTour?: Maybe<TourTypeConnection>;
  tourCategories?: Maybe<Array<Maybe<TourCategoryType>>>;
  /** The ID of the object */
  trip?: Maybe<TripType>;
  allTrip?: Maybe<TripTypeConnection>;
  /** The ID of the object */
  tripCategory?: Maybe<TripCategoryType>;
  allTripCategories?: Maybe<TripCategoryTypeConnection>;
  /** The ID of the object */
  tripLikes?: Maybe<TripLikeType>;
  allTripLikes?: Maybe<TripLikeTypeConnection>;
  /** The ID of the object */
  myTrips?: Maybe<TripType>;
  allMyTrip?: Maybe<TripTypeConnection>;
  /** The ID of the object */
  myTimeLine?: Maybe<TripType>;
  allMyTimeLine?: Maybe<TripTypeConnection>;
  /** The ID of the object */
  tripReview?: Maybe<TripReviewType>;
  allTripReview?: Maybe<TripReviewTypeConnection>;
  /** The ID of the object */
  tripImage?: Maybe<TripImageType>;
  allTripImages?: Maybe<TripImageTypeConnection>;
  allActivities?: Maybe<TripActivitieTypeConnection>;
};


export type QueryNotificationArgs = {
  id: Scalars['ID'];
};


export type QueryTransferArgs = {
  id: Scalars['ID'];
};


export type QueryAllTransferArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
  transferType?: Maybe<Scalars['ID']>;
  duration?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
};


export type QueryTransferTypeArgs = {
  id: Scalars['ID'];
};


export type QueryAllTransferTypeArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title_Iexact?: Maybe<Scalars['String']>;
};


export type QueryTripPlanArgs = {
  id: Scalars['ID'];
};


export type QueryAllTripPlanArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title?: Maybe<Scalars['String']>;
};


export type QueryMyTripPlansArgs = {
  id: Scalars['ID'];
};


export type QueryAllMyTripPlansArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  username: Scalars['String'];
};


export type QueryAllUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryAllProfileArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  about?: Maybe<Scalars['String']>;
};


export type QueryFollowedUserArgs = {
  username: Scalars['String'];
};


export type QueryFollowersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  follower?: Maybe<Scalars['ID']>;
  followed?: Maybe<Scalars['ID']>;
  dateFollowed?: Maybe<Scalars['DateTime']>;
};


export type QueryFollowingArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  follower?: Maybe<Scalars['ID']>;
  followed?: Maybe<Scalars['ID']>;
  dateFollowed?: Maybe<Scalars['DateTime']>;
};


export type QueryTourCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryPlaceCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryMyTourCollectionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  place?: Maybe<Scalars['ID']>;
};


export type QueryAccessoryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryMyAccessoryCollectionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  accessory?: Maybe<Scalars['ID']>;
};


export type QueryTripCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryMyTripCollectionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  trip?: Maybe<Scalars['ID']>;
};


export type QueryDiscountCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryMyDiscountCollectionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  discount?: Maybe<Scalars['ID']>;
};


export type QueryExperienceArgs = {
  id: Scalars['ID'];
};


export type QueryAllExperienceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  place?: Maybe<Scalars['ID']>;
};


export type QueryMyExperiencesArgs = {
  id: Scalars['ID'];
};


export type QueryAllMyExperiencesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  place?: Maybe<Scalars['ID']>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
};


export type QueryAllArticleArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
};


export type QueryArticleCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryAllArticleCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type QueryAccessoryArgs = {
  id: Scalars['ID'];
};


export type QueryAllAccessoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
  name_Istartswith?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: Maybe<Scalars['String']>;
};


export type QueryAccessoryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryAllAccessoryCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title_Iexact?: Maybe<Scalars['String']>;
};


export type QueryAccessorySiteArgs = {
  id: Scalars['ID'];
};


export type QueryAllAccessorySiteArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryAccessoryBrandArgs = {
  id: Scalars['ID'];
};


export type QueryAllAccessoryBrandArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryPlaceArgs = {
  id: Scalars['ID'];
};


export type QueryAllPlaceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_Iexact?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  city_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_Name_Iexact?: Maybe<Scalars['String']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province?: Maybe<Scalars['ID']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  type_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['ID']>;
  type_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_Title_Iexact?: Maybe<Scalars['String']>;
};


export type QueryPlaceCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryAllPlaceCategoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type QueryCountryArgs = {
  id: Scalars['ID'];
};


export type QueryAllCountriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alpha2?: Maybe<Scalars['String']>;
};


export type QueryCityArgs = {
  id: Scalars['ID'];
};


export type QueryAllCitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['ID']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province?: Maybe<Scalars['ID']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryProvinceArgs = {
  id: Scalars['ID'];
};


export type QueryAllProvincesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['ID']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTourArgs = {
  id: Scalars['ID'];
};


export type QueryAllTourArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  published?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  discountPrice?: Maybe<Scalars['Float']>;
  capacity?: Maybe<Scalars['Int']>;
  capacityLeft?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['ID']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  provinces?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryTripArgs = {
  id: Scalars['ID'];
};


export type QueryAllTripArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type QueryTripCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryAllTripCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type QueryTripLikesArgs = {
  id: Scalars['ID'];
};


export type QueryAllTripLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  trip?: Maybe<Scalars['ID']>;
};


export type QueryMyTripsArgs = {
  id: Scalars['ID'];
};


export type QueryAllMyTripArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type QueryMyTimeLineArgs = {
  id: Scalars['ID'];
};


export type QueryAllMyTimeLineArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type QueryTripReviewArgs = {
  id: Scalars['ID'];
};


export type QueryAllTripReviewArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likesCount?: Maybe<Scalars['Int']>;
  dislikesCount?: Maybe<Scalars['Int']>;
};


export type QueryTripImageArgs = {
  id: Scalars['ID'];
};


export type QueryAllTripImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
};


export type QueryAllActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  token?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  refreshToken?: Maybe<Scalars['String']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** Register user and send verification code */
export type RegisterSms = {
  __typename?: 'RegisterSMS';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** user register to tour mutation.  */
export type RegisterTourMutation = {
  __typename?: 'RegisterTourMutation';
  userRegisterTour?: Maybe<UserRegisteredTourType>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** Resend sms to user */
export type ResendVerificationSms = {
  __typename?: 'ResendVerificationSMS';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** reset password */
export type ResetPasswordSms = {
  __typename?: 'ResetPasswordSMS';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type SaveAccessoryMutation = {
  __typename?: 'SaveAccessoryMutation';
  success?: Maybe<Scalars['Boolean']>;
  accessoryCollection?: Maybe<AccessoryCollectionsType>;
};

export type SaveAccommodationMutation = {
  __typename?: 'SaveAccommodationMutation';
  success?: Maybe<Scalars['Boolean']>;
  accommodationCollection?: Maybe<AccommodationCollectionsType>;
};

export type SaveExperienceMutation = {
  __typename?: 'SaveExperienceMutation';
  success?: Maybe<Scalars['Boolean']>;
  experienceCollection?: Maybe<ExperienceCollectionsType>;
};

export type SavePlaceMutation = {
  __typename?: 'SavePlaceMutation';
  success?: Maybe<Scalars['Boolean']>;
  placeCollection?: Maybe<PlaceCollectionsType>;
};

export type SaveTourMutation = {
  __typename?: 'SaveTourMutation';
  success?: Maybe<Scalars['Boolean']>;
  tourCollection?: Maybe<TourCollectionsType>;
};

export type SaveTripMutation = {
  __typename?: 'SaveTripMutation';
  success?: Maybe<Scalars['Boolean']>;
  tripCollection?: Maybe<TripCollectionsType>;
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type SocialAuthInput = {
  provider: Scalars['String'];
  accessToken: Scalars['String'];
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Social Auth Mutation for Relay */
export type SocialAuthPayload = {
  __typename?: 'SocialAuthPayload';
  social?: Maybe<SocialNode>;
  clientMutationId?: Maybe<Scalars['String']>;
};


export type SocialNode = Node & {
  __typename?: 'SocialNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  provider: Scalars['String'];
  uid: Scalars['String'];
  extraData?: Maybe<Scalars['SocialCamelJSON']>;
  created: Scalars['DateTime'];
  modified: Scalars['DateTime'];
};

export type SocialNodeConnection = {
  __typename?: 'SocialNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SocialNodeEdge>>;
};

/** A Relay edge containing a `SocialNode` and its cursor. */
export type SocialNodeEdge = {
  __typename?: 'SocialNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<SocialNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TourCategoryType = {
  __typename?: 'TourCategoryType';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  svg: Scalars['String'];
};

export type TourCollectionsType = Node & {
  __typename?: 'TourCollectionsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  tour: TourType;
};

export type TourCollectionsTypeConnection = {
  __typename?: 'TourCollectionsTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TourCollectionsTypeEdge>>;
};

/** A Relay edge containing a `TourCollectionsType` and its cursor. */
export type TourCollectionsTypeEdge = {
  __typename?: 'TourCollectionsTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TourCollectionsType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TourInput = {
  title: Scalars['String'];
  published: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  activities?: Maybe<Scalars['UUID']>;
};

export type TourLikeType = {
  __typename?: 'TourLikeType';
  id: Scalars['ID'];
  tour: TourType;
  user: UserType;
};

export type TourReviewInput = {
  subject: Scalars['String'];
  tour: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
};

export type TourReviewType = {
  __typename?: 'TourReviewType';
  id: Scalars['ID'];
  tour: TourType;
  author: UserType;
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  likesCount: Scalars['Int'];
  dislikesCount: Scalars['Int'];
};

export type TourType = Node & {
  __typename?: 'TourType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  published: Scalars['Boolean'];
  price: Scalars['Decimal'];
  discountPrice?: Maybe<Scalars['Decimal']>;
  capacity: Scalars['Int'];
  capacityLeft: Scalars['Int'];
  likes: Scalars['Int'];
  author: UserType;
  activities: TripActivitieTypeConnection;
  categories: TripCategoryTypeConnection;
  places: PlaceTypeConnection;
  country: CountryType;
  provinces: ProvinceTypeConnection;
  cities: CityTypeConnection;
  tourLike: Array<TourLikeType>;
  reviewsOfTour: Array<TourReviewType>;
  userregisteredtourmodelSet: UserRegisteredTourTypeConnection;
  usersSavedTour: TourCollectionsTypeConnection;
};


export type TourTypeActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type TourTypeCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type TourTypePlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_Iexact?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  city_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_Name_Iexact?: Maybe<Scalars['String']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province?: Maybe<Scalars['ID']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  type_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['ID']>;
  type_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_Title_Iexact?: Maybe<Scalars['String']>;
};


export type TourTypeProvincesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['ID']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type TourTypeCitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['ID']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province?: Maybe<Scalars['ID']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type TourTypeUserregisteredtourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TourTypeUsersSavedTourArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  tour?: Maybe<Scalars['ID']>;
};

export type TourTypeConnection = {
  __typename?: 'TourTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TourTypeEdge>>;
};

/** A Relay edge containing a `TourType` and its cursor. */
export type TourTypeEdge = {
  __typename?: 'TourTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TourType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TransferInput = {
  duration?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['Date']>;
};

export type TransferType = Node & {
  __typename?: 'TransferType';
  /** The ID of the object. */
  id: Scalars['ID'];
  src: CityType;
  destination: CityType;
  transferType?: Maybe<TransferTypeType>;
  duration?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
  tripsInTransfer: TripTypeConnection;
};


export type TransferTypeTripsInTransferArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type TransferTypeConnection = {
  __typename?: 'TransferTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TransferTypeEdge>>;
};

/** A Relay edge containing a `TransferType` and its cursor. */
export type TransferTypeEdge = {
  __typename?: 'TransferTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TransferType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TransferTypeType = Node & {
  __typename?: 'TransferTypeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  svg?: Maybe<Scalars['String']>;
  transfermodelSet: TransferTypeConnection;
};


export type TransferTypeTypeTransfermodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
  transferType?: Maybe<Scalars['ID']>;
  duration?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
};

export type TransferTypeTypeConnection = {
  __typename?: 'TransferTypeTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TransferTypeTypeEdge>>;
};

/** A Relay edge containing a `TransferTypeType` and its cursor. */
export type TransferTypeTypeEdge = {
  __typename?: 'TransferTypeTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TransferTypeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TripActivitieType = Node & {
  __typename?: 'TripActivitieType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  titleEn?: Maybe<Scalars['String']>;
  titleFa?: Maybe<Scalars['String']>;
  svg?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  toursActivities: TourTypeConnection;
  tripmodelSet: TripTypeConnection;
  plansActivities: TripPlanTypeConnection;
  placeActivities: PlaceTypeConnection;
  articlesOfActivity: ArticleTypeConnection;
  experiencemodelSet: ExperienceTypeConnection;
};


export type TripActivitieTypeToursActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  published?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  discountPrice?: Maybe<Scalars['Float']>;
  capacity?: Maybe<Scalars['Int']>;
  capacityLeft?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['ID']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  provinces?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type TripActivitieTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type TripActivitieTypePlansActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title?: Maybe<Scalars['String']>;
};


export type TripActivitieTypePlaceActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_Iexact?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  city_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_Name_Iexact?: Maybe<Scalars['String']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province?: Maybe<Scalars['ID']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  type_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['ID']>;
  type_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_Title_Iexact?: Maybe<Scalars['String']>;
};


export type TripActivitieTypeArticlesOfActivityArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
};


export type TripActivitieTypeExperiencemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  place?: Maybe<Scalars['ID']>;
};

export type TripActivitieTypeConnection = {
  __typename?: 'TripActivitieTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripActivitieTypeEdge>>;
};

/** A Relay edge containing a `TripActivitieType` and its cursor. */
export type TripActivitieTypeEdge = {
  __typename?: 'TripActivitieTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TripActivitieType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TripCategoryType = Node & {
  __typename?: 'TripCategoryType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  titleEn?: Maybe<Scalars['String']>;
  titleFa?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionEn?: Maybe<Scalars['String']>;
  descriptionFa?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  svg?: Maybe<Scalars['String']>;
  toursCategories: TourTypeConnection;
  tripmodelSet: TripTypeConnection;
  plansCategory: TripPlanTypeConnection;
};


export type TripCategoryTypeToursCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  published?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  discountPrice?: Maybe<Scalars['Float']>;
  capacity?: Maybe<Scalars['Int']>;
  capacityLeft?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['ID']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  provinces?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type TripCategoryTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type TripCategoryTypePlansCategoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title?: Maybe<Scalars['String']>;
};

export type TripCategoryTypeConnection = {
  __typename?: 'TripCategoryTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripCategoryTypeEdge>>;
};

/** A Relay edge containing a `TripCategoryType` and its cursor. */
export type TripCategoryTypeEdge = {
  __typename?: 'TripCategoryTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TripCategoryType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TripCollectionsType = Node & {
  __typename?: 'TripCollectionsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  trip: TripType;
};

export type TripCollectionsTypeConnection = {
  __typename?: 'TripCollectionsTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripCollectionsTypeEdge>>;
};

/** A Relay edge containing a `TripCollectionsType` and its cursor. */
export type TripCollectionsTypeEdge = {
  __typename?: 'TripCollectionsTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TripCollectionsType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TripImageInputType = {
  description?: Maybe<Scalars['String']>;
  image: Scalars['Upload'];
  subject: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type TripImageType = Node & {
  __typename?: 'TripImageType';
  /** The ID of the object. */
  id: Scalars['ID'];
  image: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  user: UserType;
  copyrightName?: Maybe<Scalars['String']>;
  tripmodelSet: TripTypeConnection;
  plansImages: TripPlanTypeConnection;
};


export type TripImageTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type TripImageTypePlansImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title?: Maybe<Scalars['String']>;
};

export type TripImageTypeConnection = {
  __typename?: 'TripImageTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripImageTypeEdge>>;
};

/** A Relay edge containing a `TripImageType` and its cursor. */
export type TripImageTypeEdge = {
  __typename?: 'TripImageTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TripImageType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TripInput = {
  title: Scalars['String'];
  published: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  tripMap?: Maybe<Scalars['JSONString']>;
  gpsTrack?: Maybe<Scalars['JSONString']>;
  costs?: Maybe<Scalars['JSONString']>;
  checkList?: Maybe<Scalars['JSONString']>;
  todoList?: Maybe<Scalars['JSONString']>;
  defaultImage?: Maybe<Scalars['Upload']>;
};

export type TripLikeType = Node & {
  __typename?: 'TripLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  trip: TripType;
  user: UserType;
};

export type TripLikeTypeConnection = {
  __typename?: 'TripLikeTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripLikeTypeEdge>>;
};

/** A Relay edge containing a `TripLikeType` and its cursor. */
export type TripLikeTypeEdge = {
  __typename?: 'TripLikeTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TripLikeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TripPlanInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  planMap?: Maybe<Scalars['JSONString']>;
  costs?: Maybe<Scalars['JSONString']>;
  checkList?: Maybe<Scalars['JSONString']>;
  todoList?: Maybe<Scalars['JSONString']>;
};

export type TripPlanRelatedInput = {
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  companions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accessories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type TripPlanType = Node & {
  __typename?: 'TripPlanType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  companionsEditable: Scalars['Boolean'];
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  planMap?: Maybe<Scalars['JSONString']>;
  costs?: Maybe<Scalars['GenericScalar']>;
  checkList?: Maybe<Scalars['GenericScalar']>;
  todoList?: Maybe<Scalars['GenericScalar']>;
  images: TripImageTypeConnection;
  activities: TripActivitieTypeConnection;
  categories: TripCategoryTypeConnection;
  creator: UserType;
  companions: UserTypeConnection;
  accessories: AccessoryTypeConnection;
  places: PlaceTypeConnection;
  countries: CountryType;
};


export type TripPlanTypeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
};


export type TripPlanTypeActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type TripPlanTypeCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type TripPlanTypeCompanionsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
};


export type TripPlanTypeAccessoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
  name_Istartswith?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: Maybe<Scalars['String']>;
};


export type TripPlanTypePlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_Iexact?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  city_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_Name_Iexact?: Maybe<Scalars['String']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province?: Maybe<Scalars['ID']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  type_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['ID']>;
  type_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_Title_Iexact?: Maybe<Scalars['String']>;
};

export type TripPlanTypeConnection = {
  __typename?: 'TripPlanTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripPlanTypeEdge>>;
};

/** A Relay edge containing a `TripPlanType` and its cursor. */
export type TripPlanTypeEdge = {
  __typename?: 'TripPlanTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TripPlanType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TripRelatedInput = {
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  companions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  reviews?: Maybe<Array<Maybe<Scalars['ID']>>>;
  places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accessories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  experiences?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** An enumeration. */
export enum TripReviewLikeModelValue {
  /** Up */
  A_1 = 'A_1',
  /** Down */
  _1 = '_1'
}

export type TripReviewLikeType = Node & {
  __typename?: 'TripReviewLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  review: TripReviewType;
  value: TripReviewLikeModelValue;
};

export type TripReviewLikeTypeConnection = {
  __typename?: 'TripReviewLikeTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripReviewLikeTypeEdge>>;
};

/** A Relay edge containing a `TripReviewLikeType` and its cursor. */
export type TripReviewLikeTypeEdge = {
  __typename?: 'TripReviewLikeTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TripReviewLikeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TripReviewType = Node & {
  __typename?: 'TripReviewType';
  /** The ID of the object. */
  id: Scalars['ID'];
  trip: TripType;
  author: UserType;
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  likesCount: Scalars['Int'];
  dislikesCount: Scalars['Int'];
  tripmodelSet: TripTypeConnection;
  likesOfTripReview: TripReviewLikeTypeConnection;
  userLiked?: Maybe<Scalars['String']>;
};


export type TripReviewTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type TripReviewTypeLikesOfTripReviewArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  review?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};

export type TripReviewTypeConnection = {
  __typename?: 'TripReviewTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripReviewTypeEdge>>;
};

/** A Relay edge containing a `TripReviewType` and its cursor. */
export type TripReviewTypeEdge = {
  __typename?: 'TripReviewTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TripReviewType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** Trip description */
export type TripType = Node & {
  __typename?: 'TripType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  tripMap?: Maybe<Scalars['JSONString']>;
  gpsTrack?: Maybe<Scalars['JSONString']>;
  published: Scalars['Boolean'];
  defaultImage: Scalars['String'];
  costs?: Maybe<Scalars['GenericScalar']>;
  checkList?: Maybe<Scalars['GenericScalar']>;
  todoList?: Maybe<Scalars['GenericScalar']>;
  viewsCount: Scalars['Int'];
  isPrivate: Scalars['Boolean'];
  author: UserType;
  country: CountryType;
  province: ProvinceType;
  activities: TripActivitieTypeConnection;
  categories: TripCategoryTypeConnection;
  companions: UserTypeConnection;
  images: TripImageTypeConnection;
  videos: TripVideoTypeConnection;
  reviews: TripReviewTypeConnection;
  places: PlaceTypeConnection;
  accessories: AccessoryTypeConnection;
  experiences?: Maybe<ExperienceTypeConnection>;
  transfers: TransferTypeConnection;
  cities: CityTypeConnection;
  likes: Scalars['Int'];
  tripLikes?: Maybe<TripLikeType>;
  reviewsOfTrip: TripReviewTypeConnection;
  usersSavedTrip: TripCollectionsTypeConnection;
  userLiked?: Maybe<Scalars['Boolean']>;
  userSaved?: Maybe<Scalars['Boolean']>;
};


/** Trip description */
export type TripTypeActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


/** Trip description */
export type TripTypeCategoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


/** Trip description */
export type TripTypeCompanionsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
};


/** Trip description */
export type TripTypeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
};


/** Trip description */
export type TripTypeVideosArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


/** Trip description */
export type TripTypeReviewsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likesCount?: Maybe<Scalars['Int']>;
  dislikesCount?: Maybe<Scalars['Int']>;
};


/** Trip description */
export type TripTypePlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_Iexact?: Maybe<Scalars['String']>;
  city_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  city?: Maybe<Scalars['ID']>;
  city_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_Name_Iexact?: Maybe<Scalars['String']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province?: Maybe<Scalars['ID']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  type_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['ID']>;
  type_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_Title_Iexact?: Maybe<Scalars['String']>;
};


/** Trip description */
export type TripTypeAccessoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_Icontains?: Maybe<Scalars['String']>;
  name_Istartswith?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Icontains?: Maybe<Scalars['String']>;
  referenceLinks_AccessoryIdInSite_Istartswith?: Maybe<Scalars['String']>;
};


/** Trip description */
export type TripTypeExperiencesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  place?: Maybe<Scalars['ID']>;
};


/** Trip description */
export type TripTypeTransfersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['ID']>;
  destination?: Maybe<Scalars['ID']>;
  transferType?: Maybe<Scalars['ID']>;
  duration?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
};


/** Trip description */
export type TripTypeCitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['ID']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  province?: Maybe<Scalars['ID']>;
  province_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  province_Name_Iexact?: Maybe<Scalars['String']>;
  province_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Trip description */
export type TripTypeReviewsOfTripArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likesCount?: Maybe<Scalars['Int']>;
  dislikesCount?: Maybe<Scalars['Int']>;
};


/** Trip description */
export type TripTypeUsersSavedTripArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  trip?: Maybe<Scalars['ID']>;
};

export type TripTypeConnection = {
  __typename?: 'TripTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripTypeEdge>>;
};

/** A Relay edge containing a `TripType` and its cursor. */
export type TripTypeEdge = {
  __typename?: 'TripTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TripType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TripVideoType = Node & {
  __typename?: 'TripVideoType';
  /** The ID of the object. */
  id: Scalars['ID'];
  video: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  user: UserType;
  copyrightName?: Maybe<Scalars['String']>;
  tripmodelSet: TripTypeConnection;
};


export type TripVideoTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type TripVideoTypeConnection = {
  __typename?: 'TripVideoTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TripVideoTypeEdge>>;
};

/** A Relay edge containing a `TripVideoType` and its cursor. */
export type TripVideoTypeEdge = {
  __typename?: 'TripVideoTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TripVideoType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};


export type UnPublishTripMutation = {
  __typename?: 'UnPublishTripMutation';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  trip?: Maybe<TripType>;
};

/** unregister user from tour mutation.  */
export type UnRegisterTourMutation = {
  __typename?: 'UnRegisterTourMutation';
  deleted?: Maybe<Scalars['Boolean']>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type UpdateExperienceMutation = {
  __typename?: 'UpdateExperienceMutation';
  experience?: Maybe<ExperienceType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateProfileInput = {
  profile?: Maybe<ProfileInputType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProfilePayload = {
  __typename?: 'UpdateProfilePayload';
  profile?: Maybe<ProfileType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** update trip review mutation. */
export type UpdateTrip = {
  __typename?: 'UpdateTrip';
  trip?: Maybe<TripType>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type UpdateTripInput = {
  title?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  tripMap?: Maybe<Scalars['JSONString']>;
  gpsTrack?: Maybe<Scalars['JSONString']>;
  costs?: Maybe<Scalars['JSONString']>;
  checkList?: Maybe<Scalars['JSONString']>;
  todoList?: Maybe<Scalars['JSONString']>;
  defaultImage?: Maybe<Scalars['Upload']>;
};

export type UpdateTripPlan = {
  __typename?: 'UpdateTripPlan';
  success?: Maybe<Scalars['Boolean']>;
  tripPlan?: Maybe<TripPlanType>;
};

/** update trip review mutation. */
export type UpdateTripReview = {
  __typename?: 'UpdateTripReview';
  review?: Maybe<TripReviewType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateUserInput = {
  userInputs?: Maybe<UserInputType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  user?: Maybe<UserType>;
  clientMutationId?: Maybe<Scalars['String']>;
};


export type UserInputType = {
  username?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['Upload']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  avatar: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
  archived?: Maybe<Scalars['Boolean']>;
  acceptedTerms: Scalars['Boolean'];
  profilemodel?: Maybe<ProfileType>;
  followingUsers: FollowingTypeConnection;
  followerUsers: FollowingTypeConnection;
  socialAuth: SocialNodeConnection;
  tourmodelSet: TourTypeConnection;
  tourLike: Array<TourLikeType>;
  tourReviewsOfUser: Array<TourReviewType>;
  userregisteredtourmodelSet: UserRegisteredTourTypeConnection;
  tripVideos: TripVideoTypeConnection;
  tripImages: TripImageTypeConnection;
  trips: TripTypeConnection;
  tripsInCompanion: TripTypeConnection;
  requirementTripLikes: TripLikeTypeConnection;
  tripReviewsOfUser: TripReviewTypeConnection;
  likesTripReviewOfUser: TripReviewLikeTypeConnection;
  plans: TripPlanTypeConnection;
  plansInCompanion: TripPlanTypeConnection;
  placesImages: PlaceImageTypeConnection;
  placesVideos: PlaceVideoTypeConnection;
  feelsOfUser: PlaceFeelTypeConnection;
  likedAccessories: AccessoryLikeTypeConnection;
  articles: ArticleTypeConnection;
  articleReviews: ArticleReviewTypeConnection;
  likedArticles: ArticleReviewLikeTypeConnection;
  savedTrips: TripCollectionsTypeConnection;
  savedExperiences: ExperienceCollectionsTypeConnection;
  savedPlaces: PlaceCollectionsTypeConnection;
  savedTours: TourCollectionsTypeConnection;
  savedAccessories: AccessoryCollectionsTypeConnection;
  savedAccommodations: AccommodationCollectionsTypeConnection;
  savedDiscounts: DiscountCollectionsTypeConnection;
  experienceVideosOfUser: ExperienceVideoTypeConnection;
  experienceImagesOfUser: ExperienceImageTypeConnection;
  experiencesOfUser: ExperienceTypeConnection;
  notificationmodelSet: Array<NotificationType>;
  pk?: Maybe<Scalars['Int']>;
  secondaryEmail?: Maybe<Scalars['String']>;
};


export type UserNodeFollowingUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  follower?: Maybe<Scalars['ID']>;
  followed?: Maybe<Scalars['ID']>;
  dateFollowed?: Maybe<Scalars['DateTime']>;
};


export type UserNodeFollowerUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  follower?: Maybe<Scalars['ID']>;
  followed?: Maybe<Scalars['ID']>;
  dateFollowed?: Maybe<Scalars['DateTime']>;
};


export type UserNodeSocialAuthArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  uid_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  provider?: Maybe<Scalars['String']>;
  provider_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UserNodeTourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  published?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  discountPrice?: Maybe<Scalars['Float']>;
  capacity?: Maybe<Scalars['Int']>;
  capacityLeft?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['ID']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  provinces?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodeUserregisteredtourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodeTripVideosArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodeTripImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
};


export type UserNodeTripsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type UserNodeTripsInCompanionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type UserNodeRequirementTripLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  trip?: Maybe<Scalars['ID']>;
};


export type UserNodeTripReviewsOfUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likesCount?: Maybe<Scalars['Int']>;
  dislikesCount?: Maybe<Scalars['Int']>;
};


export type UserNodeLikesTripReviewOfUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  review?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};


export type UserNodePlansArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title?: Maybe<Scalars['String']>;
};


export type UserNodePlansInCompanionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title?: Maybe<Scalars['String']>;
};


export type UserNodePlacesImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodePlacesVideosArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodeFeelsOfUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  place?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
  feel?: Maybe<Scalars['String']>;
};


export type UserNodeLikedAccessoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  accessory?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
};


export type UserNodeArticlesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
};


export type UserNodeArticleReviewsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  article?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};


export type UserNodeLikedArticlesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  article?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
};


export type UserNodeSavedTripsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  trip?: Maybe<Scalars['ID']>;
};


export type UserNodeSavedExperiencesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  experience?: Maybe<Scalars['ID']>;
};


export type UserNodeSavedPlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  place?: Maybe<Scalars['ID']>;
};


export type UserNodeSavedToursArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  tour?: Maybe<Scalars['ID']>;
};


export type UserNodeSavedAccessoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  accessory?: Maybe<Scalars['ID']>;
};


export type UserNodeSavedAccommodationsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  accommodation?: Maybe<Scalars['ID']>;
};


export type UserNodeSavedDiscountsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  discount?: Maybe<Scalars['ID']>;
};


export type UserNodeExperienceVideosOfUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodeExperienceImagesOfUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodeExperiencesOfUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  place?: Maybe<Scalars['ID']>;
};

export type UserRegisteredTourType = Node & {
  __typename?: 'UserRegisteredTourType';
  /** The ID of the object. */
  id: Scalars['ID'];
  tour: TourType;
  user: UserType;
  nationalId: Scalars['String'];
  firstName: Scalars['String'];
  familyName: Scalars['String'];
  phone: Scalars['String'];
  emergencyPhone: Scalars['String'];
};

export type UserRegisteredTourTypeConnection = {
  __typename?: 'UserRegisteredTourTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserRegisteredTourTypeEdge>>;
};

/** A Relay edge containing a `UserRegisteredTourType` and its cursor. */
export type UserRegisteredTourTypeEdge = {
  __typename?: 'UserRegisteredTourTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserRegisteredTourType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UserType = Node & {
  __typename?: 'UserType';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  avatar: Scalars['String'];
  archived: Scalars['Boolean'];
  profilemodel?: Maybe<ProfileType>;
  followingUsers: FollowingTypeConnection;
  followerUsers: FollowingTypeConnection;
  socialAuth: SocialNodeConnection;
  tourmodelSet: TourTypeConnection;
  tourLike: Array<TourLikeType>;
  tourReviewsOfUser: Array<TourReviewType>;
  userregisteredtourmodelSet: UserRegisteredTourTypeConnection;
  tripVideos: TripVideoTypeConnection;
  tripImages: TripImageTypeConnection;
  trips: TripTypeConnection;
  tripsInCompanion: TripTypeConnection;
  requirementTripLikes: TripLikeTypeConnection;
  tripReviewsOfUser: TripReviewTypeConnection;
  likesTripReviewOfUser: TripReviewLikeTypeConnection;
  plans: TripPlanTypeConnection;
  plansInCompanion: TripPlanTypeConnection;
  placesImages: PlaceImageTypeConnection;
  placesVideos: PlaceVideoTypeConnection;
  feelsOfUser: PlaceFeelTypeConnection;
  likedAccessories: AccessoryLikeTypeConnection;
  articles: ArticleTypeConnection;
  articleReviews: ArticleReviewTypeConnection;
  likedArticles: ArticleReviewLikeTypeConnection;
  savedTrips: TripCollectionsTypeConnection;
  savedExperiences: ExperienceCollectionsTypeConnection;
  savedPlaces: PlaceCollectionsTypeConnection;
  savedTours: TourCollectionsTypeConnection;
  savedAccessories: AccessoryCollectionsTypeConnection;
  savedAccommodations: AccommodationCollectionsTypeConnection;
  savedDiscounts: DiscountCollectionsTypeConnection;
  experienceVideosOfUser: ExperienceVideoTypeConnection;
  experienceImagesOfUser: ExperienceImageTypeConnection;
  experiencesOfUser: ExperienceTypeConnection;
  notificationmodelSet: Array<NotificationType>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
};


export type UserTypeFollowingUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  follower?: Maybe<Scalars['ID']>;
  followed?: Maybe<Scalars['ID']>;
  dateFollowed?: Maybe<Scalars['DateTime']>;
};


export type UserTypeFollowerUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  follower?: Maybe<Scalars['ID']>;
  followed?: Maybe<Scalars['ID']>;
  dateFollowed?: Maybe<Scalars['DateTime']>;
};


export type UserTypeSocialAuthArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  uid_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  provider?: Maybe<Scalars['String']>;
  provider_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UserTypeTourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  published?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  discountPrice?: Maybe<Scalars['Float']>;
  capacity?: Maybe<Scalars['Int']>;
  capacityLeft?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['ID']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  provinces?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserTypeUserregisteredtourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTypeTripVideosArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTypeTripImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
};


export type UserTypeTripsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type UserTypeTripsInCompanionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  categories_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories_Title_Iexact?: Maybe<Scalars['String']>;
  cities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  cities_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cities_Name_Iexact?: Maybe<Scalars['String']>;
  country_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  country_Name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_Name_Iexact?: Maybe<Scalars['String']>;
  activities_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
  activities_Iexact?: Maybe<Array<Maybe<Scalars['ID']>>>;
  activities_Title_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  activities_Title_Iexact?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};


export type UserTypeRequirementTripLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  trip?: Maybe<Scalars['ID']>;
};


export type UserTypeTripReviewsOfUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  likesCount?: Maybe<Scalars['Int']>;
  dislikesCount?: Maybe<Scalars['Int']>;
};


export type UserTypeLikesTripReviewOfUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  review?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};


export type UserTypePlansArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title?: Maybe<Scalars['String']>;
};


export type UserTypePlansInCompanionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categories_Title?: Maybe<Scalars['String']>;
};


export type UserTypePlacesImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTypePlacesVideosArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTypeFeelsOfUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  place?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
  feel?: Maybe<Scalars['String']>;
};


export type UserTypeLikedAccessoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  accessory?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
};


export type UserTypeArticlesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['ID']>;
  category_Title?: Maybe<Scalars['String']>;
};


export type UserTypeArticleReviewsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  article?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};


export type UserTypeLikedArticlesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  article?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
};


export type UserTypeSavedTripsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  trip?: Maybe<Scalars['ID']>;
};


export type UserTypeSavedExperiencesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  experience?: Maybe<Scalars['ID']>;
};


export type UserTypeSavedPlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  place?: Maybe<Scalars['ID']>;
};


export type UserTypeSavedToursArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  tour?: Maybe<Scalars['ID']>;
};


export type UserTypeSavedAccessoriesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  accessory?: Maybe<Scalars['ID']>;
};


export type UserTypeSavedAccommodationsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  accommodation?: Maybe<Scalars['ID']>;
};


export type UserTypeSavedDiscountsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  discount?: Maybe<Scalars['ID']>;
};


export type UserTypeExperienceVideosOfUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTypeExperienceImagesOfUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTypeExperiencesOfUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  activities?: Maybe<Array<Maybe<Scalars['ID']>>>;
  place?: Maybe<Scalars['ID']>;
};

export type UserTypeConnection = {
  __typename?: 'UserTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserTypeEdge>>;
};

/** A Relay edge containing a `UserType` and its cursor. */
export type UserTypeEdge = {
  __typename?: 'UserTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload?: Maybe<Scalars['GenericScalar']>;
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

/** Verify user using verification code that send with sms */
export type VerifySms = {
  __typename?: 'VerifySMS';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type VerifySmsMutationVariables = Exact<{
  verifySmsCode: Scalars['String'];
  verifySmsPhoneNumber: Scalars['String'];
}>;


export type VerifySmsMutation = (
  { __typename?: 'Mutation' }
  & { verifySms?: Maybe<(
    { __typename?: 'VerifySMS' }
    & Pick<VerifySms, 'success' | 'errors'>
  )> }
);

export type RegisterSmsMutationVariables = Exact<{
  registerSmsPassword1: Scalars['String'];
  registerSmsPassword2: Scalars['String'];
  registerSmsPhoneNumber: Scalars['String'];
  registerSmsUsername?: Maybe<Scalars['String']>;
}>;


export type RegisterSmsMutation = (
  { __typename?: 'Mutation' }
  & { registerSms?: Maybe<(
    { __typename?: 'RegisterSMS' }
    & Pick<RegisterSms, 'success' | 'errors'>
  )> }
);

export type RefreshTokenMutationVariables = Exact<{
  refreshTokenRefreshToken: Scalars['String'];
}>;


export type RefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { refreshToken?: Maybe<(
    { __typename?: 'Refresh' }
    & Pick<Refresh, 'token' | 'payload' | 'refreshToken'>
  )> }
);

export type ResetPasswordSmsMutationVariables = Exact<{
  resetPasswordSmsCode: Scalars['String'];
  resetPasswordSmsNewPassword1: Scalars['String'];
  resetPasswordSmsNewPassword2: Scalars['String'];
  resetPasswordSmsPhoneNumber: Scalars['String'];
}>;


export type ResetPasswordSmsMutation = (
  { __typename?: 'Mutation' }
  & { resetPasswordSms?: Maybe<(
    { __typename?: 'ResetPasswordSMS' }
    & Pick<ResetPasswordSms, 'success' | 'errors'>
  )> }
);

export type ForgotPasswordSmsMutationVariables = Exact<{
  forgotPasswordSmsPhoneNumber: Scalars['String'];
}>;


export type ForgotPasswordSmsMutation = (
  { __typename?: 'Mutation' }
  & { forgotPasswordSms?: Maybe<(
    { __typename?: 'ForgotPasswordSMS' }
    & Pick<ForgotPasswordSms, 'success' | 'errors'>
  )> }
);

export type TokenAuthMutationVariables = Exact<{
  tokenAuthPassword: Scalars['String'];
  tokenAuthPhoneNumber?: Maybe<Scalars['String']>;
  tokenAuthEmail?: Maybe<Scalars['String']>;
  tokenAuthUsername?: Maybe<Scalars['String']>;
}>;


export type TokenAuthMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'token' | 'success' | 'errors' | 'refreshToken'>
  )> }
);

export type ResendVerificationSmsMutationVariables = Exact<{
  resendVerificationSmsPhoneNumber: Scalars['String'];
}>;


export type ResendVerificationSmsMutation = (
  { __typename?: 'Mutation' }
  & { resendVerificationSms?: Maybe<(
    { __typename?: 'ResendVerificationSMS' }
    & Pick<ResendVerificationSms, 'success' | 'errors'>
  )> }
);

export type PasswordChangeMutationVariables = Exact<{
  passwordChangeOldPassword: Scalars['String'];
  passwordChangeNewPassword1: Scalars['String'];
  passwordChangeNewPassword2: Scalars['String'];
}>;


export type PasswordChangeMutation = (
  { __typename?: 'Mutation' }
  & { passwordChange?: Maybe<(
    { __typename?: 'ChangePasswordMutation' }
    & Pick<ChangePasswordMutation, 'success' | 'errors'>
  )> }
);

export type UsernameChangeMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type UsernameChangeMutation = (
  { __typename?: 'Mutation' }
  & { changeUsername?: Maybe<(
    { __typename?: 'ChangeUsernameMutation' }
    & Pick<ChangeUsernameMutation, 'success' | 'errors'>
  )> }
);

export type CreateSinglTransferMutationVariables = Exact<{
  src: Scalars['ID'];
  destination: Scalars['ID'];
  transferInput?: Maybe<TransferInput>;
  transferType: Scalars['ID'];
}>;


export type CreateSinglTransferMutation = (
  { __typename?: 'Mutation' }
  & { createTransfer?: Maybe<(
    { __typename?: 'CreateTransferMutation' }
    & Pick<CreateTransferMutation, 'success'>
    & { transfer?: Maybe<(
      { __typename?: 'TransferType' }
      & Pick<TransferType, 'id' | 'duration' | 'startTime'>
      & { src: (
        { __typename?: 'CityType' }
        & Pick<CityType, 'name' | 'latitude' | 'longitude' | 'id'>
      ), destination: (
        { __typename?: 'CityType' }
        & Pick<CityType, 'name' | 'latitude' | 'longitude' | 'id'>
      ), transferType?: Maybe<(
        { __typename?: 'TransferTypeType' }
        & Pick<TransferTypeType, 'id' | 'title' | 'svg'>
      )> }
    )> }
  )> }
);

export type DeleteSingleTransferMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteSingleTransferMutation = (
  { __typename?: 'Mutation' }
  & { deleteTransfer?: Maybe<(
    { __typename?: 'DeleteTransferMutation' }
    & Pick<DeleteTransferMutation, 'success'>
  )> }
);

export type LikeTripMutationVariables = Exact<{
  createTripLikeTripId: Scalars['ID'];
}>;


export type LikeTripMutation = (
  { __typename?: 'Mutation' }
  & { createTripLike?: Maybe<(
    { __typename?: 'CreateTripLike' }
    & Pick<CreateTripLike, 'success' | 'like'>
    & { trip?: Maybe<(
      { __typename?: 'TripType' }
      & Pick<TripType, 'id' | 'likes' | 'userLiked'>
    )> }
  )> }
);

export type CreateTripReviewMutationVariables = Exact<{
  createTripReviewInput: CreateTripReviewInput;
}>;


export type CreateTripReviewMutation = (
  { __typename?: 'Mutation' }
  & { createTripReview?: Maybe<(
    { __typename?: 'CreateTripReviewPayload' }
    & Pick<CreateTripReviewPayload, 'success'>
  )> }
);

export type CreateInitialTripMutationVariables = Exact<{
  createTripTripInput: TripInput;
  createTripTripRelatedInput: TripRelatedInput;
  createTripProvince: Scalars['ID'];
  createTripCountry: Scalars['ID'];
}>;


export type CreateInitialTripMutation = (
  { __typename?: 'Mutation' }
  & { createTrip?: Maybe<(
    { __typename?: 'CreateTrip' }
    & Pick<CreateTrip, 'success'>
    & { trip?: Maybe<(
      { __typename?: 'TripType' }
      & Pick<TripType, 'id'>
    )> }
  )> }
);

export type UpdateTripMutationVariables = Exact<{
  tripData?: Maybe<UpdateTripInput>;
  tripId: Scalars['ID'];
  removeTripRelatedData?: Maybe<TripRelatedInput>;
  tripRelatedData?: Maybe<TripRelatedInput>;
  province?: Maybe<Scalars['ID']>;
  country?: Maybe<Scalars['ID']>;
}>;


export type UpdateTripMutation = (
  { __typename?: 'Mutation' }
  & { updateTrip?: Maybe<(
    { __typename?: 'UpdateTrip' }
    & Pick<UpdateTrip, 'success'>
    & { trip?: Maybe<(
      { __typename?: 'TripType' }
      & Pick<TripType, 'id'>
    )> }
  )> }
);

export type LikeTripReviewMutationMutationVariables = Exact<{
  likeTripReviewReview: Scalars['ID'];
}>;


export type LikeTripReviewMutationMutation = (
  { __typename?: 'Mutation' }
  & { likeTripReview?: Maybe<(
    { __typename?: 'LikeTripReviewMutation' }
    & { tripReviewLike?: Maybe<(
      { __typename?: 'TripReviewLikeType' }
      & Pick<TripReviewLikeType, 'value'>
      & { review: (
        { __typename?: 'TripReviewType' }
        & Pick<TripReviewType, 'likesCount' | 'dislikesCount'>
      ) }
    )> }
  )> }
);

export type DislikeTripReviewMutationMutationVariables = Exact<{
  dislikeTripReviewReview: Scalars['ID'];
}>;


export type DislikeTripReviewMutationMutation = (
  { __typename?: 'Mutation' }
  & { dislikeTripReview?: Maybe<(
    { __typename?: 'DisLikeTripReviewMutation' }
    & { tripReviewLike?: Maybe<(
      { __typename?: 'TripReviewLikeType' }
      & Pick<TripReviewLikeType, 'value'>
      & { review: (
        { __typename?: 'TripReviewType' }
        & Pick<TripReviewType, 'dislikesCount' | 'likesCount'>
      ) }
    )> }
  )> }
);

export type SaveTripMutationMutationVariables = Exact<{
  saveTripTrip?: Maybe<Scalars['ID']>;
}>;


export type SaveTripMutationMutation = (
  { __typename?: 'Mutation' }
  & { saveTrip?: Maybe<(
    { __typename?: 'SaveTripMutation' }
    & Pick<SaveTripMutation, 'success'>
    & { tripCollection?: Maybe<(
      { __typename?: 'TripCollectionsType' }
      & { trip: (
        { __typename?: 'TripType' }
        & Pick<TripType, 'userSaved'>
      ) }
    )> }
  )> }
);

export type UpdateProfileMutationVariables = Exact<{
  updateProfileInput: UpdateProfileInput;
}>;


export type UpdateProfileMutation = (
  { __typename?: 'Mutation' }
  & { updateProfile?: Maybe<(
    { __typename?: 'UpdateProfilePayload' }
    & { profile?: Maybe<(
      { __typename?: 'ProfileType' }
      & Pick<ProfileType, 'about' | 'tripStatus' | 'header'>
      & { user?: Maybe<(
        { __typename?: 'UserType' }
        & Pick<UserType, 'id'>
      )> }
    )> }
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'UpdateUserPayload' }
    & { user?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'avatar' | 'username' | 'id'>
    )> }
  )> }
);

export type FollowOrUnfollowMutationVariables = Exact<{
  followOrUnfollowInput: FollowOrUnfollowInput;
}>;


export type FollowOrUnfollowMutation = (
  { __typename?: 'Mutation' }
  & { followOrUnfollow?: Maybe<(
    { __typename?: 'FollowOrUnfollowPayload' }
    & Pick<FollowOrUnfollowPayload, 'followStatus'>
  )> }
);

export type SearchAccessoryQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
}>;


export type SearchAccessoryQuery = (
  { __typename?: 'Query' }
  & { allAccessory?: Maybe<(
    { __typename?: 'AccessoryTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'AccessoryTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'AccessoryType' }
        & Pick<AccessoryType, 'id' | 'name' | 'imageLink'>
        & { category: (
          { __typename?: 'AccessoryCategoryType' }
          & Pick<AccessoryCategoryType, 'id' | 'title'>
        ) }
      )> }
    )>> }
  )> }
);

export type AllArticleQueryVariables = Exact<{
  allArticleOffset?: Maybe<Scalars['Int']>;
  allArticleBefore?: Maybe<Scalars['String']>;
  allArticleAfter?: Maybe<Scalars['String']>;
  allArticleFirst?: Maybe<Scalars['Int']>;
  allArticleLast?: Maybe<Scalars['Int']>;
  allArticleCategory?: Maybe<Scalars['ID']>;
}>;


export type AllArticleQuery = (
  { __typename?: 'Query' }
  & { allArticle?: Maybe<(
    { __typename?: 'ArticleTypeConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'ArticleTypeEdge' }
      & Pick<ArticleTypeEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'ArticleType' }
        & Pick<ArticleType, 'id' | 'title' | 'shortDescription' | 'likes' | 'timeToRead' | 'image'>
        & { author: (
          { __typename?: 'UserType' }
          & Pick<UserType, 'username' | 'avatar'>
        ), category?: Maybe<(
          { __typename?: 'ArticleCategoryType' }
          & Pick<ArticleCategoryType, 'title'>
        )> }
      )> }
    )>> }
  )> }
);

export type AllArticleCategoryiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllArticleCategoryiesQuery = (
  { __typename?: 'Query' }
  & { allArticleCategories?: Maybe<(
    { __typename?: 'ArticleCategoryTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'ArticleCategoryTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'ArticleCategoryType' }
        & Pick<ArticleCategoryType, 'id' | 'title' | 'svg'>
      )> }
    )>> }
  )> }
);

export type ArticleQueryVariables = Exact<{
  articleId: Scalars['ID'];
}>;


export type ArticleQuery = (
  { __typename?: 'Query' }
  & { article?: Maybe<(
    { __typename?: 'ArticleType' }
    & Pick<ArticleType, 'title' | 'shortDescription' | 'content' | 'createdAt' | 'likes' | 'timeToRead' | 'image'>
    & { author: (
      { __typename?: 'UserType' }
      & Pick<UserType, 'id' | 'username' | 'avatar'>
    ), category?: Maybe<(
      { __typename?: 'ArticleCategoryType' }
      & Pick<ArticleCategoryType, 'title' | 'id'>
    )>, activities: (
      { __typename?: 'TripActivitieTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TripActivitieTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TripActivitieType' }
          & Pick<TripActivitieType, 'title' | 'svg'>
        )> }
      )>> }
    ), places: (
      { __typename?: 'PlaceTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'PlaceTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'PlaceType' }
          & Pick<PlaceType, 'name'>
        )> }
      )>> }
    ), accessories: (
      { __typename?: 'AccessoryTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'AccessoryTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'AccessoryType' }
          & Pick<AccessoryType, 'name' | 'image'>
        )> }
      )>> }
    ), reviewsOfArticle: (
      { __typename?: 'ArticleReviewTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'ArticleReviewTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'ArticleReviewType' }
          & Pick<ArticleReviewType, 'description'>
          & { author: (
            { __typename?: 'UserType' }
            & Pick<UserType, 'username' | 'avatar'>
          ) }
        )> }
      )>> }
    ) }
  )> }
);

export type AllTransferTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTransferTypesQuery = (
  { __typename?: 'Query' }
  & { allTransferType?: Maybe<(
    { __typename?: 'TransferTypeTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'TransferTypeTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TransferTypeType' }
        & Pick<TransferTypeType, 'id' | 'title' | 'svg'>
      )> }
    )>> }
  )> }
);

export type AllTripQueryVariables = Exact<{
  allTripOffset?: Maybe<Scalars['Int']>;
  allTripBefore?: Maybe<Scalars['String']>;
  allTripAfter?: Maybe<Scalars['String']>;
  allTripFirst?: Maybe<Scalars['Int']>;
  allTripLast?: Maybe<Scalars['Int']>;
  allTripCategories?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>>> | Maybe<Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>>>;
}>;


export type AllTripQuery = (
  { __typename?: 'Query' }
  & { allTrip?: Maybe<(
    { __typename?: 'TripTypeConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'TripTypeEdge' }
      & Pick<TripTypeEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'TripType' }
        & Pick<TripType, 'id' | 'title' | 'description' | 'createdAt' | 'startDate' | 'endDate' | 'viewsCount' | 'defaultImage' | 'likes' | 'userLiked' | 'published'>
        & { author: (
          { __typename?: 'UserType' }
          & Pick<UserType, 'id' | 'username' | 'avatar'>
        ), categories: (
          { __typename?: 'TripCategoryTypeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'TripCategoryTypeEdge' }
            & { node?: Maybe<(
              { __typename?: 'TripCategoryType' }
              & Pick<TripCategoryType, 'title'>
            )> }
          )>> }
        ), country: (
          { __typename?: 'CountryType' }
          & Pick<CountryType, 'name'>
        ), province: (
          { __typename?: 'ProvinceType' }
          & Pick<ProvinceType, 'name'>
        ), places: (
          { __typename?: 'PlaceTypeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'PlaceTypeEdge' }
            & { node?: Maybe<(
              { __typename?: 'PlaceType' }
              & Pick<PlaceType, 'id'>
            )> }
          )>> }
        ), experiences?: Maybe<(
          { __typename?: 'ExperienceTypeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'ExperienceTypeEdge' }
            & { node?: Maybe<(
              { __typename?: 'ExperienceType' }
              & Pick<ExperienceType, 'id'>
            )> }
          )>> }
        )> }
      )> }
    )>> }
  )> }
);

export type AllTripCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTripCategoriesQuery = (
  { __typename?: 'Query' }
  & { allTripCategories?: Maybe<(
    { __typename?: 'TripCategoryTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'TripCategoryTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TripCategoryType' }
        & Pick<TripCategoryType, 'id' | 'title' | 'image'>
      )> }
    )>> }
  )> }
);

export type TripSimpleFieldsFragment = (
  { __typename?: 'TripType' }
  & Pick<TripType, 'id' | 'title' | 'description' | 'createdAt' | 'startDate' | 'endDate' | 'defaultImage' | 'viewsCount' | 'published' | 'userLiked' | 'likes'>
  & { author: (
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'username' | 'avatar'>
  ), country: (
    { __typename?: 'CountryType' }
    & Pick<CountryType, 'name'>
  ), province: (
    { __typename?: 'ProvinceType' }
    & Pick<ProvinceType, 'name'>
  ), categories: (
    { __typename?: 'TripCategoryTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'TripCategoryTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TripCategoryType' }
        & Pick<TripCategoryType, 'title'>
      )> }
    )>> }
  ), places: (
    { __typename?: 'PlaceTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'PlaceTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'PlaceType' }
        & Pick<PlaceType, 'id'>
      )> }
    )>> }
  ), experiences?: Maybe<(
    { __typename?: 'ExperienceTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'ExperienceTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'ExperienceType' }
        & Pick<ExperienceType, 'id'>
      )> }
    )>> }
  )> }
);

export type AllActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActivitiesQuery = (
  { __typename?: 'Query' }
  & { allActivities?: Maybe<(
    { __typename?: 'TripActivitieTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'TripActivitieTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TripActivitieType' }
        & Pick<TripActivitieType, 'id' | 'svg' | 'title' | 'titleFa' | 'description'>
      )> }
    )>> }
  )> }
);

export type TripDetailLikesQueryVariables = Exact<{
  tripId: Scalars['ID'];
}>;


export type TripDetailLikesQuery = (
  { __typename?: 'Query' }
  & { trip?: Maybe<(
    { __typename?: 'TripType' }
    & Pick<TripType, 'likes' | 'userLiked'>
  )> }
);

export type TripDetailQueryVariables = Exact<{
  tripId: Scalars['ID'];
}>;


export type TripDetailQuery = (
  { __typename?: 'Query' }
  & { trip?: Maybe<(
    { __typename?: 'TripType' }
    & Pick<TripType, 'userLiked' | 'userSaved' | 'id' | 'tripMap' | 'gpsTrack' | 'costs' | 'checkList' | 'todoList' | 'published' | 'title' | 'description' | 'createdAt' | 'startDate' | 'endDate' | 'likes' | 'defaultImage' | 'viewsCount'>
    & { activities: (
      { __typename?: 'TripActivitieTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TripActivitieTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TripActivitieType' }
          & Pick<TripActivitieType, 'svg' | 'title' | 'titleFa' | 'id'>
        )> }
      )>> }
    ), accessories: (
      { __typename?: 'AccessoryTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'AccessoryTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'AccessoryType' }
          & Pick<AccessoryType, 'id' | 'likesCount' | 'image' | 'imageLink' | 'name'>
          & { brand?: Maybe<(
            { __typename?: 'AccessoryBrandType' }
            & Pick<AccessoryBrandType, 'logo' | 'name'>
          )> }
        )> }
      )>> }
    ), companions: (
      { __typename?: 'UserTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'UserTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'UserType' }
          & Pick<UserType, 'id' | 'username' | 'avatar'>
        )> }
      )>> }
    ), images: (
      { __typename?: 'TripImageTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TripImageTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TripImageType' }
          & Pick<TripImageType, 'id' | 'image' | 'description' | 'copyrightName'>
        )> }
      )>> }
    ), videos: (
      { __typename?: 'TripVideoTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TripVideoTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TripVideoType' }
          & Pick<TripVideoType, 'video' | 'description' | 'copyrightName'>
        )> }
      )>> }
    ), author: (
      { __typename?: 'UserType' }
      & Pick<UserType, 'id' | 'username' | 'avatar'>
    ), experiences?: Maybe<(
      { __typename?: 'ExperienceTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'ExperienceTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'ExperienceType' }
          & Pick<ExperienceType, 'id' | 'title' | 'defaultImage' | 'description'>
          & { place: (
            { __typename?: 'PlaceType' }
            & Pick<PlaceType, 'name'>
          ), activities: (
            { __typename?: 'TripActivitieTypeConnection' }
            & { edges: Array<Maybe<(
              { __typename?: 'TripActivitieTypeEdge' }
              & { node?: Maybe<(
                { __typename?: 'TripActivitieType' }
                & Pick<TripActivitieType, 'id' | 'title' | 'titleFa' | 'svg'>
              )> }
            )>> }
          ), images: (
            { __typename?: 'ExperienceImageTypeConnection' }
            & { edges: Array<Maybe<(
              { __typename?: 'ExperienceImageTypeEdge' }
              & { node?: Maybe<(
                { __typename?: 'ExperienceImageType' }
                & Pick<ExperienceImageType, 'id' | 'latitude' | 'longitude' | 'description' | 'image' | 'copyrightName'>
              )> }
            )>> }
          ) }
        )> }
      )>> }
    )>, places: (
      { __typename?: 'PlaceTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'PlaceTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'PlaceType' }
          & Pick<PlaceType, 'id' | 'name' | 'longitude' | 'latitude'>
        )> }
      )>> }
    ), transfers: (
      { __typename?: 'TransferTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TransferTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TransferType' }
          & Pick<TransferType, 'id' | 'duration' | 'startTime'>
          & { src: (
            { __typename?: 'CityType' }
            & Pick<CityType, 'name' | 'latitude' | 'longitude' | 'id'>
          ), destination: (
            { __typename?: 'CityType' }
            & Pick<CityType, 'name' | 'latitude' | 'longitude' | 'id'>
          ), transferType?: Maybe<(
            { __typename?: 'TransferTypeType' }
            & Pick<TransferTypeType, 'id' | 'title' | 'svg'>
          )> }
        )> }
      )>> }
    ), country: (
      { __typename?: 'CountryType' }
      & Pick<CountryType, 'id' | 'name'>
    ), province: (
      { __typename?: 'ProvinceType' }
      & Pick<ProvinceType, 'id' | 'name'>
    ), categories: (
      { __typename?: 'TripCategoryTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TripCategoryTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TripCategoryType' }
          & Pick<TripCategoryType, 'id' | 'title'>
        )> }
      )>> }
    ) }
  )> }
);

export type TripReviewsQueryVariables = Exact<{
  tripId: Scalars['ID'];
}>;


export type TripReviewsQuery = (
  { __typename?: 'Query' }
  & { trip?: Maybe<(
    { __typename?: 'TripType' }
    & { reviewsOfTrip: (
      { __typename?: 'TripReviewTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TripReviewTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TripReviewType' }
          & Pick<TripReviewType, 'likesCount' | 'dislikesCount' | 'description' | 'createdAt' | 'id' | 'userLiked'>
          & { author: (
            { __typename?: 'UserType' }
            & Pick<UserType, 'id' | 'username' | 'avatar'>
          ) }
        )> }
      )>> }
    ) }
  )> }
);

export type AllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCountriesQuery = (
  { __typename?: 'Query' }
  & { allCountries?: Maybe<(
    { __typename?: 'CountryTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'CountryTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'CountryType' }
        & Pick<CountryType, 'name' | 'id'>
      )> }
    )>> }
  )> }
);

export type AllProvincesOfCountryQueryVariables = Exact<{
  allProvincesCountry?: Maybe<Scalars['ID']>;
}>;


export type AllProvincesOfCountryQuery = (
  { __typename?: 'Query' }
  & { allProvinces?: Maybe<(
    { __typename?: 'ProvinceTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'ProvinceTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'ProvinceType' }
        & Pick<ProvinceType, 'id' | 'name'>
      )> }
    )>> }
  )> }
);

export type AllCitiesOfProvinceQueryVariables = Exact<{
  province: Scalars['ID'];
}>;


export type AllCitiesOfProvinceQuery = (
  { __typename?: 'Query' }
  & { allCities?: Maybe<(
    { __typename?: 'CityTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'CityTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'CityType' }
        & Pick<CityType, 'id' | 'name'>
      )> }
    )>> }
  )> }
);

export type TripReviewLikeStatusQueryVariables = Exact<{
  tripReviewId: Scalars['ID'];
}>;


export type TripReviewLikeStatusQuery = (
  { __typename?: 'Query' }
  & { tripReview?: Maybe<(
    { __typename?: 'TripReviewType' }
    & Pick<TripReviewType, 'userLiked'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'id' | 'username' | 'avatar'>
  )> }
);

export type MeDetailQueryVariables = Exact<{ [key: string]: never; }>;


export type MeDetailQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserType' }
    & { profilemodel?: Maybe<(
      { __typename?: 'ProfileType' }
      & ProfileFieldsFragment
    )>, trips: (
      { __typename?: 'TripTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TripTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TripType' }
          & TripSimpleFieldsFragment
        )> }
      )>> }
    ) }
    & UserFieldsFragment
  )> }
);

export type UserDetailQueryVariables = Exact<{
  username: Scalars['String'];
  followedUsername: Scalars['String'];
}>;


export type UserDetailQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'followedUser'>
  & { user?: Maybe<(
    { __typename?: 'UserType' }
    & { profilemodel?: Maybe<(
      { __typename?: 'ProfileType' }
      & ProfileFieldsFragment
    )>, trips: (
      { __typename?: 'TripTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TripTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'TripType' }
          & TripSimpleFieldsFragment
        )> }
      )>> }
    ) }
    & UserFieldsFragment
  )> }
);

export type IsFollowedQueryVariables = Exact<{
  followedUsername: Scalars['String'];
}>;


export type IsFollowedQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'followedUser'>
);

export type UserFollowingsQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserFollowingsQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UserType' }
    & { followingUsers: (
      { __typename?: 'FollowingTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'FollowingTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'FollowingType' }
          & { followed: (
            { __typename?: 'UserType' }
            & Pick<UserType, 'username' | 'avatar' | 'id'>
          ) }
        )> }
      )>> }
    ) }
  )> }
);

export type UserFollowersQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserFollowersQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UserType' }
    & { followerUsers: (
      { __typename?: 'FollowingTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'FollowingTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'FollowingType' }
          & { follower: (
            { __typename?: 'UserType' }
            & Pick<UserType, 'id' | 'username' | 'avatar'>
          ) }
        )> }
      )>> }
    ) }
  )> }
);

export type MeFollowingsQueryVariables = Exact<{ [key: string]: never; }>;


export type MeFollowingsQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserType' }
    & { followingUsers: (
      { __typename?: 'FollowingTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'FollowingTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'FollowingType' }
          & { followed: (
            { __typename?: 'UserType' }
            & Pick<UserType, 'id' | 'username' | 'avatar'>
          ) }
        )> }
      )>> }
    ) }
  )> }
);

export type MeFollowersQueryVariables = Exact<{ [key: string]: never; }>;


export type MeFollowersQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserType' }
    & { followerUsers: (
      { __typename?: 'FollowingTypeConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'FollowingTypeEdge' }
        & { node?: Maybe<(
          { __typename?: 'FollowingType' }
          & { follower: (
            { __typename?: 'UserType' }
            & Pick<UserType, 'id' | 'username' | 'avatar'>
          ) }
        )> }
      )>> }
    ) }
  )> }
);

export type AllProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProfilesQuery = (
  { __typename?: 'Query' }
  & { allUsers?: Maybe<(
    { __typename?: 'UserTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UserTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'UserType' }
        & Pick<UserType, 'id' | 'username' | 'avatar'>
        & { trips: (
          { __typename?: 'TripTypeConnection' }
          & { edges: Array<Maybe<(
            { __typename?: 'TripTypeEdge' }
            & { node?: Maybe<(
              { __typename?: 'TripType' }
              & Pick<TripType, 'id'>
            )> }
          )>> }
        ), profilemodel?: Maybe<(
          { __typename?: 'ProfileType' }
          & Pick<ProfileType, 'tripStatus' | 'header' | 'about' | 'followersCount' | 'followingsCount'>
          & { achievements: (
            { __typename?: 'AchivmentTypeConnection' }
            & { edges: Array<Maybe<(
              { __typename?: 'AchivmentTypeEdge' }
              & { node?: Maybe<(
                { __typename?: 'AchivmentType' }
                & Pick<AchivmentType, 'title' | 'image'>
              )> }
            )>> }
          ) }
        )> }
      )> }
    )>> }
  )> }
);

export type MeSavedTripsQueryVariables = Exact<{ [key: string]: never; }>;


export type MeSavedTripsQuery = (
  { __typename?: 'Query' }
  & { myTripCollection?: Maybe<(
    { __typename?: 'TripCollectionsTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'TripCollectionsTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TripCollectionsType' }
        & { trip: (
          { __typename?: 'TripType' }
          & TripSimpleFieldsFragment
        ) }
      )> }
    )>> }
  )> }
);

export type MyTripsQueryVariables = Exact<{
  published?: Maybe<Scalars['Boolean']>;
}>;


export type MyTripsQuery = (
  { __typename?: 'Query' }
  & { allMyTrip?: Maybe<(
    { __typename?: 'TripTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'TripTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TripType' }
        & TripSimpleFieldsFragment
      )> }
    )>> }
  )> }
);

export type UserFieldsFragment = (
  { __typename?: 'UserType' }
  & Pick<UserType, 'id' | 'username' | 'avatar' | 'email' | 'dateJoined'>
);

export type ProfileFieldsFragment = (
  { __typename?: 'ProfileType' }
  & Pick<ProfileType, 'about' | 'tripStatus' | 'header' | 'gender' | 'followersCount' | 'followingsCount'>
);

export type DeleteTripMutationVariables = Exact<{
  deleteTripTripId: Scalars['ID'];
}>;


export type DeleteTripMutation = (
  { __typename?: 'Mutation' }
  & { deleteTrip?: Maybe<(
    { __typename?: 'DeleteTrip' }
    & Pick<DeleteTrip, 'deleted'>
  )> }
);

export type PublisTripMutationVariables = Exact<{
  tripId: Scalars['ID'];
}>;


export type PublisTripMutation = (
  { __typename?: 'Mutation' }
  & { publishTrip?: Maybe<(
    { __typename?: 'PublishTripMutation' }
    & Pick<PublishTripMutation, 'success' | 'errors'>
    & { trip?: Maybe<(
      { __typename?: 'TripType' }
      & Pick<TripType, 'published'>
    )> }
  )> }
);

export type UnPublisTripMutationVariables = Exact<{
  tripId: Scalars['ID'];
}>;


export type UnPublisTripMutation = (
  { __typename?: 'Mutation' }
  & { undoPublishTrip?: Maybe<(
    { __typename?: 'UnPublishTripMutation' }
    & Pick<UnPublishTripMutation, 'success' | 'errors'>
    & { trip?: Maybe<(
      { __typename?: 'TripType' }
      & Pick<TripType, 'published'>
    )> }
  )> }
);

export type SearchUsernameQueryVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
}>;


export type SearchUsernameQuery = (
  { __typename?: 'Query' }
  & { allUsers?: Maybe<(
    { __typename?: 'UserTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UserTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'UserType' }
        & Pick<UserType, 'username' | 'id' | 'avatar'>
      )> }
    )>> }
  )> }
);

export const TripSimpleFieldsFragmentDoc = gql`
    fragment TripSimpleFields on TripType {
  id
  title
  description
  createdAt
  startDate
  endDate
  defaultImage
  viewsCount
  author {
    id
    username
    avatar
  }
  country {
    name
  }
  published
  province {
    name
  }
  userLiked
  categories {
    edges {
      node {
        title
      }
    }
  }
  likes
  places {
    edges {
      node {
        id
      }
    }
  }
  experiences {
    edges {
      node {
        id
      }
    }
  }
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on UserType {
  id
  username
  avatar
  email
  dateJoined
}
    `;
export const ProfileFieldsFragmentDoc = gql`
    fragment ProfileFields on ProfileType {
  about
  tripStatus
  header
  gender
  followersCount
  followingsCount
}
    `;
export const VerifySmsDocument = gql`
    mutation VerifySms($verifySmsCode: String!, $verifySmsPhoneNumber: String!) {
  verifySms(code: $verifySmsCode, phoneNumber: $verifySmsPhoneNumber) {
    success
    errors
  }
}
    `;
export type VerifySmsMutationFn = Apollo.MutationFunction<VerifySmsMutation, VerifySmsMutationVariables>;

/**
 * __useVerifySmsMutation__
 *
 * To run a mutation, you first call `useVerifySmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifySmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifySmsMutation, { data, loading, error }] = useVerifySmsMutation({
 *   variables: {
 *      verifySmsCode: // value for 'verifySmsCode'
 *      verifySmsPhoneNumber: // value for 'verifySmsPhoneNumber'
 *   },
 * });
 */
export function useVerifySmsMutation(baseOptions?: Apollo.MutationHookOptions<VerifySmsMutation, VerifySmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifySmsMutation, VerifySmsMutationVariables>(VerifySmsDocument, options);
      }
export type VerifySmsMutationHookResult = ReturnType<typeof useVerifySmsMutation>;
export type VerifySmsMutationResult = Apollo.MutationResult<VerifySmsMutation>;
export type VerifySmsMutationOptions = Apollo.BaseMutationOptions<VerifySmsMutation, VerifySmsMutationVariables>;
export const RegisterSmsDocument = gql`
    mutation RegisterSms($registerSmsPassword1: String!, $registerSmsPassword2: String!, $registerSmsPhoneNumber: String!, $registerSmsUsername: String) {
  registerSms(
    password1: $registerSmsPassword1
    password2: $registerSmsPassword2
    phoneNumber: $registerSmsPhoneNumber
    username: $registerSmsUsername
  ) {
    success
    errors
  }
}
    `;
export type RegisterSmsMutationFn = Apollo.MutationFunction<RegisterSmsMutation, RegisterSmsMutationVariables>;

/**
 * __useRegisterSmsMutation__
 *
 * To run a mutation, you first call `useRegisterSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerSmsMutation, { data, loading, error }] = useRegisterSmsMutation({
 *   variables: {
 *      registerSmsPassword1: // value for 'registerSmsPassword1'
 *      registerSmsPassword2: // value for 'registerSmsPassword2'
 *      registerSmsPhoneNumber: // value for 'registerSmsPhoneNumber'
 *      registerSmsUsername: // value for 'registerSmsUsername'
 *   },
 * });
 */
export function useRegisterSmsMutation(baseOptions?: Apollo.MutationHookOptions<RegisterSmsMutation, RegisterSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterSmsMutation, RegisterSmsMutationVariables>(RegisterSmsDocument, options);
      }
export type RegisterSmsMutationHookResult = ReturnType<typeof useRegisterSmsMutation>;
export type RegisterSmsMutationResult = Apollo.MutationResult<RegisterSmsMutation>;
export type RegisterSmsMutationOptions = Apollo.BaseMutationOptions<RegisterSmsMutation, RegisterSmsMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($refreshTokenRefreshToken: String!) {
  refreshToken(refreshToken: $refreshTokenRefreshToken) {
    token
    payload
    refreshToken
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      refreshTokenRefreshToken: // value for 'refreshTokenRefreshToken'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const ResetPasswordSmsDocument = gql`
    mutation ResetPasswordSms($resetPasswordSmsCode: String!, $resetPasswordSmsNewPassword1: String!, $resetPasswordSmsNewPassword2: String!, $resetPasswordSmsPhoneNumber: String!) {
  resetPasswordSms(
    code: $resetPasswordSmsCode
    newPassword1: $resetPasswordSmsNewPassword1
    newPassword2: $resetPasswordSmsNewPassword2
    phoneNumber: $resetPasswordSmsPhoneNumber
  ) {
    success
    errors
  }
}
    `;
export type ResetPasswordSmsMutationFn = Apollo.MutationFunction<ResetPasswordSmsMutation, ResetPasswordSmsMutationVariables>;

/**
 * __useResetPasswordSmsMutation__
 *
 * To run a mutation, you first call `useResetPasswordSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordSmsMutation, { data, loading, error }] = useResetPasswordSmsMutation({
 *   variables: {
 *      resetPasswordSmsCode: // value for 'resetPasswordSmsCode'
 *      resetPasswordSmsNewPassword1: // value for 'resetPasswordSmsNewPassword1'
 *      resetPasswordSmsNewPassword2: // value for 'resetPasswordSmsNewPassword2'
 *      resetPasswordSmsPhoneNumber: // value for 'resetPasswordSmsPhoneNumber'
 *   },
 * });
 */
export function useResetPasswordSmsMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordSmsMutation, ResetPasswordSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordSmsMutation, ResetPasswordSmsMutationVariables>(ResetPasswordSmsDocument, options);
      }
export type ResetPasswordSmsMutationHookResult = ReturnType<typeof useResetPasswordSmsMutation>;
export type ResetPasswordSmsMutationResult = Apollo.MutationResult<ResetPasswordSmsMutation>;
export type ResetPasswordSmsMutationOptions = Apollo.BaseMutationOptions<ResetPasswordSmsMutation, ResetPasswordSmsMutationVariables>;
export const ForgotPasswordSmsDocument = gql`
    mutation ForgotPasswordSms($forgotPasswordSmsPhoneNumber: String!) {
  forgotPasswordSms(phoneNumber: $forgotPasswordSmsPhoneNumber) {
    success
    errors
  }
}
    `;
export type ForgotPasswordSmsMutationFn = Apollo.MutationFunction<ForgotPasswordSmsMutation, ForgotPasswordSmsMutationVariables>;

/**
 * __useForgotPasswordSmsMutation__
 *
 * To run a mutation, you first call `useForgotPasswordSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordSmsMutation, { data, loading, error }] = useForgotPasswordSmsMutation({
 *   variables: {
 *      forgotPasswordSmsPhoneNumber: // value for 'forgotPasswordSmsPhoneNumber'
 *   },
 * });
 */
export function useForgotPasswordSmsMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordSmsMutation, ForgotPasswordSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordSmsMutation, ForgotPasswordSmsMutationVariables>(ForgotPasswordSmsDocument, options);
      }
export type ForgotPasswordSmsMutationHookResult = ReturnType<typeof useForgotPasswordSmsMutation>;
export type ForgotPasswordSmsMutationResult = Apollo.MutationResult<ForgotPasswordSmsMutation>;
export type ForgotPasswordSmsMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordSmsMutation, ForgotPasswordSmsMutationVariables>;
export const TokenAuthDocument = gql`
    mutation TokenAuth($tokenAuthPassword: String!, $tokenAuthPhoneNumber: String, $tokenAuthEmail: String, $tokenAuthUsername: String) {
  tokenAuth(
    password: $tokenAuthPassword
    phoneNumber: $tokenAuthPhoneNumber
    email: $tokenAuthEmail
    username: $tokenAuthUsername
  ) {
    token
    success
    errors
    refreshToken
  }
}
    `;
export type TokenAuthMutationFn = Apollo.MutationFunction<TokenAuthMutation, TokenAuthMutationVariables>;

/**
 * __useTokenAuthMutation__
 *
 * To run a mutation, you first call `useTokenAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenAuthMutation, { data, loading, error }] = useTokenAuthMutation({
 *   variables: {
 *      tokenAuthPassword: // value for 'tokenAuthPassword'
 *      tokenAuthPhoneNumber: // value for 'tokenAuthPhoneNumber'
 *      tokenAuthEmail: // value for 'tokenAuthEmail'
 *      tokenAuthUsername: // value for 'tokenAuthUsername'
 *   },
 * });
 */
export function useTokenAuthMutation(baseOptions?: Apollo.MutationHookOptions<TokenAuthMutation, TokenAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenAuthMutation, TokenAuthMutationVariables>(TokenAuthDocument, options);
      }
export type TokenAuthMutationHookResult = ReturnType<typeof useTokenAuthMutation>;
export type TokenAuthMutationResult = Apollo.MutationResult<TokenAuthMutation>;
export type TokenAuthMutationOptions = Apollo.BaseMutationOptions<TokenAuthMutation, TokenAuthMutationVariables>;
export const ResendVerificationSmsDocument = gql`
    mutation ResendVerificationSms($resendVerificationSmsPhoneNumber: String!) {
  resendVerificationSms(phoneNumber: $resendVerificationSmsPhoneNumber) {
    success
    errors
  }
}
    `;
export type ResendVerificationSmsMutationFn = Apollo.MutationFunction<ResendVerificationSmsMutation, ResendVerificationSmsMutationVariables>;

/**
 * __useResendVerificationSmsMutation__
 *
 * To run a mutation, you first call `useResendVerificationSmsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerificationSmsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerificationSmsMutation, { data, loading, error }] = useResendVerificationSmsMutation({
 *   variables: {
 *      resendVerificationSmsPhoneNumber: // value for 'resendVerificationSmsPhoneNumber'
 *   },
 * });
 */
export function useResendVerificationSmsMutation(baseOptions?: Apollo.MutationHookOptions<ResendVerificationSmsMutation, ResendVerificationSmsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResendVerificationSmsMutation, ResendVerificationSmsMutationVariables>(ResendVerificationSmsDocument, options);
      }
export type ResendVerificationSmsMutationHookResult = ReturnType<typeof useResendVerificationSmsMutation>;
export type ResendVerificationSmsMutationResult = Apollo.MutationResult<ResendVerificationSmsMutation>;
export type ResendVerificationSmsMutationOptions = Apollo.BaseMutationOptions<ResendVerificationSmsMutation, ResendVerificationSmsMutationVariables>;
export const PasswordChangeDocument = gql`
    mutation PasswordChange($passwordChangeOldPassword: String!, $passwordChangeNewPassword1: String!, $passwordChangeNewPassword2: String!) {
  passwordChange(
    oldPassword: $passwordChangeOldPassword
    newPassword1: $passwordChangeNewPassword1
    newPassword2: $passwordChangeNewPassword2
  ) {
    success
    errors
  }
}
    `;
export type PasswordChangeMutationFn = Apollo.MutationFunction<PasswordChangeMutation, PasswordChangeMutationVariables>;

/**
 * __usePasswordChangeMutation__
 *
 * To run a mutation, you first call `usePasswordChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePasswordChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [passwordChangeMutation, { data, loading, error }] = usePasswordChangeMutation({
 *   variables: {
 *      passwordChangeOldPassword: // value for 'passwordChangeOldPassword'
 *      passwordChangeNewPassword1: // value for 'passwordChangeNewPassword1'
 *      passwordChangeNewPassword2: // value for 'passwordChangeNewPassword2'
 *   },
 * });
 */
export function usePasswordChangeMutation(baseOptions?: Apollo.MutationHookOptions<PasswordChangeMutation, PasswordChangeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PasswordChangeMutation, PasswordChangeMutationVariables>(PasswordChangeDocument, options);
      }
export type PasswordChangeMutationHookResult = ReturnType<typeof usePasswordChangeMutation>;
export type PasswordChangeMutationResult = Apollo.MutationResult<PasswordChangeMutation>;
export type PasswordChangeMutationOptions = Apollo.BaseMutationOptions<PasswordChangeMutation, PasswordChangeMutationVariables>;
export const UsernameChangeDocument = gql`
    mutation UsernameChange($username: String!) {
  changeUsername(username: $username) {
    success
    errors
  }
}
    `;
export type UsernameChangeMutationFn = Apollo.MutationFunction<UsernameChangeMutation, UsernameChangeMutationVariables>;

/**
 * __useUsernameChangeMutation__
 *
 * To run a mutation, you first call `useUsernameChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUsernameChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [usernameChangeMutation, { data, loading, error }] = useUsernameChangeMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUsernameChangeMutation(baseOptions?: Apollo.MutationHookOptions<UsernameChangeMutation, UsernameChangeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UsernameChangeMutation, UsernameChangeMutationVariables>(UsernameChangeDocument, options);
      }
export type UsernameChangeMutationHookResult = ReturnType<typeof useUsernameChangeMutation>;
export type UsernameChangeMutationResult = Apollo.MutationResult<UsernameChangeMutation>;
export type UsernameChangeMutationOptions = Apollo.BaseMutationOptions<UsernameChangeMutation, UsernameChangeMutationVariables>;
export const CreateSinglTransferDocument = gql`
    mutation CreateSinglTransfer($src: ID!, $destination: ID!, $transferInput: TransferInput, $transferType: ID!) {
  createTransfer(
    src: $src
    destination: $destination
    transferInput: $transferInput
    transferType: $transferType
  ) {
    success
    transfer {
      id
      duration
      src {
        name
        latitude
        longitude
        id
      }
      destination {
        name
        latitude
        longitude
        id
      }
      startTime
      transferType {
        id
        title
        svg
      }
    }
  }
}
    `;
export type CreateSinglTransferMutationFn = Apollo.MutationFunction<CreateSinglTransferMutation, CreateSinglTransferMutationVariables>;

/**
 * __useCreateSinglTransferMutation__
 *
 * To run a mutation, you first call `useCreateSinglTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSinglTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSinglTransferMutation, { data, loading, error }] = useCreateSinglTransferMutation({
 *   variables: {
 *      src: // value for 'src'
 *      destination: // value for 'destination'
 *      transferInput: // value for 'transferInput'
 *      transferType: // value for 'transferType'
 *   },
 * });
 */
export function useCreateSinglTransferMutation(baseOptions?: Apollo.MutationHookOptions<CreateSinglTransferMutation, CreateSinglTransferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSinglTransferMutation, CreateSinglTransferMutationVariables>(CreateSinglTransferDocument, options);
      }
export type CreateSinglTransferMutationHookResult = ReturnType<typeof useCreateSinglTransferMutation>;
export type CreateSinglTransferMutationResult = Apollo.MutationResult<CreateSinglTransferMutation>;
export type CreateSinglTransferMutationOptions = Apollo.BaseMutationOptions<CreateSinglTransferMutation, CreateSinglTransferMutationVariables>;
export const DeleteSingleTransferDocument = gql`
    mutation DeleteSingleTransfer($id: ID!) {
  deleteTransfer(transferId: $id) {
    success
  }
}
    `;
export type DeleteSingleTransferMutationFn = Apollo.MutationFunction<DeleteSingleTransferMutation, DeleteSingleTransferMutationVariables>;

/**
 * __useDeleteSingleTransferMutation__
 *
 * To run a mutation, you first call `useDeleteSingleTransferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSingleTransferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSingleTransferMutation, { data, loading, error }] = useDeleteSingleTransferMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSingleTransferMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSingleTransferMutation, DeleteSingleTransferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSingleTransferMutation, DeleteSingleTransferMutationVariables>(DeleteSingleTransferDocument, options);
      }
export type DeleteSingleTransferMutationHookResult = ReturnType<typeof useDeleteSingleTransferMutation>;
export type DeleteSingleTransferMutationResult = Apollo.MutationResult<DeleteSingleTransferMutation>;
export type DeleteSingleTransferMutationOptions = Apollo.BaseMutationOptions<DeleteSingleTransferMutation, DeleteSingleTransferMutationVariables>;
export const LikeTripDocument = gql`
    mutation LikeTrip($createTripLikeTripId: ID!) {
  createTripLike(tripId: $createTripLikeTripId) {
    success
    like
    trip {
      id
      likes
      userLiked
    }
  }
}
    `;
export type LikeTripMutationFn = Apollo.MutationFunction<LikeTripMutation, LikeTripMutationVariables>;

/**
 * __useLikeTripMutation__
 *
 * To run a mutation, you first call `useLikeTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeTripMutation, { data, loading, error }] = useLikeTripMutation({
 *   variables: {
 *      createTripLikeTripId: // value for 'createTripLikeTripId'
 *   },
 * });
 */
export function useLikeTripMutation(baseOptions?: Apollo.MutationHookOptions<LikeTripMutation, LikeTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeTripMutation, LikeTripMutationVariables>(LikeTripDocument, options);
      }
export type LikeTripMutationHookResult = ReturnType<typeof useLikeTripMutation>;
export type LikeTripMutationResult = Apollo.MutationResult<LikeTripMutation>;
export type LikeTripMutationOptions = Apollo.BaseMutationOptions<LikeTripMutation, LikeTripMutationVariables>;
export const CreateTripReviewDocument = gql`
    mutation CreateTripReview($createTripReviewInput: CreateTripReviewInput!) {
  createTripReview(input: $createTripReviewInput) {
    success
  }
}
    `;
export type CreateTripReviewMutationFn = Apollo.MutationFunction<CreateTripReviewMutation, CreateTripReviewMutationVariables>;

/**
 * __useCreateTripReviewMutation__
 *
 * To run a mutation, you first call `useCreateTripReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTripReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTripReviewMutation, { data, loading, error }] = useCreateTripReviewMutation({
 *   variables: {
 *      createTripReviewInput: // value for 'createTripReviewInput'
 *   },
 * });
 */
export function useCreateTripReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateTripReviewMutation, CreateTripReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTripReviewMutation, CreateTripReviewMutationVariables>(CreateTripReviewDocument, options);
      }
export type CreateTripReviewMutationHookResult = ReturnType<typeof useCreateTripReviewMutation>;
export type CreateTripReviewMutationResult = Apollo.MutationResult<CreateTripReviewMutation>;
export type CreateTripReviewMutationOptions = Apollo.BaseMutationOptions<CreateTripReviewMutation, CreateTripReviewMutationVariables>;
export const CreateInitialTripDocument = gql`
    mutation CreateInitialTrip($createTripTripInput: TripInput!, $createTripTripRelatedInput: TripRelatedInput!, $createTripProvince: ID!, $createTripCountry: ID!) {
  createTrip(
    tripInput: $createTripTripInput
    tripRelatedInput: $createTripTripRelatedInput
    province: $createTripProvince
    country: $createTripCountry
  ) {
    trip {
      id
    }
    success
  }
}
    `;
export type CreateInitialTripMutationFn = Apollo.MutationFunction<CreateInitialTripMutation, CreateInitialTripMutationVariables>;

/**
 * __useCreateInitialTripMutation__
 *
 * To run a mutation, you first call `useCreateInitialTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInitialTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInitialTripMutation, { data, loading, error }] = useCreateInitialTripMutation({
 *   variables: {
 *      createTripTripInput: // value for 'createTripTripInput'
 *      createTripTripRelatedInput: // value for 'createTripTripRelatedInput'
 *      createTripProvince: // value for 'createTripProvince'
 *      createTripCountry: // value for 'createTripCountry'
 *   },
 * });
 */
export function useCreateInitialTripMutation(baseOptions?: Apollo.MutationHookOptions<CreateInitialTripMutation, CreateInitialTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInitialTripMutation, CreateInitialTripMutationVariables>(CreateInitialTripDocument, options);
      }
export type CreateInitialTripMutationHookResult = ReturnType<typeof useCreateInitialTripMutation>;
export type CreateInitialTripMutationResult = Apollo.MutationResult<CreateInitialTripMutation>;
export type CreateInitialTripMutationOptions = Apollo.BaseMutationOptions<CreateInitialTripMutation, CreateInitialTripMutationVariables>;
export const UpdateTripDocument = gql`
    mutation UpdateTrip($tripData: UpdateTripInput, $tripId: ID!, $removeTripRelatedData: TripRelatedInput, $tripRelatedData: TripRelatedInput, $province: ID, $country: ID) {
  updateTrip(
    tripData: $tripData
    tripId: $tripId
    tripRelatedData: $tripRelatedData
    removeTripRelatedData: $removeTripRelatedData
    province: $province
    country: $country
  ) {
    trip {
      id
    }
    success
  }
}
    `;
export type UpdateTripMutationFn = Apollo.MutationFunction<UpdateTripMutation, UpdateTripMutationVariables>;

/**
 * __useUpdateTripMutation__
 *
 * To run a mutation, you first call `useUpdateTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTripMutation, { data, loading, error }] = useUpdateTripMutation({
 *   variables: {
 *      tripData: // value for 'tripData'
 *      tripId: // value for 'tripId'
 *      removeTripRelatedData: // value for 'removeTripRelatedData'
 *      tripRelatedData: // value for 'tripRelatedData'
 *      province: // value for 'province'
 *      country: // value for 'country'
 *   },
 * });
 */
export function useUpdateTripMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTripMutation, UpdateTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTripMutation, UpdateTripMutationVariables>(UpdateTripDocument, options);
      }
export type UpdateTripMutationHookResult = ReturnType<typeof useUpdateTripMutation>;
export type UpdateTripMutationResult = Apollo.MutationResult<UpdateTripMutation>;
export type UpdateTripMutationOptions = Apollo.BaseMutationOptions<UpdateTripMutation, UpdateTripMutationVariables>;
export const LikeTripReviewMutationDocument = gql`
    mutation LikeTripReviewMutation($likeTripReviewReview: ID!) {
  likeTripReview(review: $likeTripReviewReview) {
    tripReviewLike {
      value
      review {
        likesCount
        dislikesCount
      }
    }
  }
}
    `;
export type LikeTripReviewMutationMutationFn = Apollo.MutationFunction<LikeTripReviewMutationMutation, LikeTripReviewMutationMutationVariables>;

/**
 * __useLikeTripReviewMutationMutation__
 *
 * To run a mutation, you first call `useLikeTripReviewMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeTripReviewMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeTripReviewMutationMutation, { data, loading, error }] = useLikeTripReviewMutationMutation({
 *   variables: {
 *      likeTripReviewReview: // value for 'likeTripReviewReview'
 *   },
 * });
 */
export function useLikeTripReviewMutationMutation(baseOptions?: Apollo.MutationHookOptions<LikeTripReviewMutationMutation, LikeTripReviewMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeTripReviewMutationMutation, LikeTripReviewMutationMutationVariables>(LikeTripReviewMutationDocument, options);
      }
export type LikeTripReviewMutationMutationHookResult = ReturnType<typeof useLikeTripReviewMutationMutation>;
export type LikeTripReviewMutationMutationResult = Apollo.MutationResult<LikeTripReviewMutationMutation>;
export type LikeTripReviewMutationMutationOptions = Apollo.BaseMutationOptions<LikeTripReviewMutationMutation, LikeTripReviewMutationMutationVariables>;
export const DislikeTripReviewMutationDocument = gql`
    mutation DislikeTripReviewMutation($dislikeTripReviewReview: ID!) {
  dislikeTripReview(review: $dislikeTripReviewReview) {
    tripReviewLike {
      value
      review {
        dislikesCount
        likesCount
      }
    }
  }
}
    `;
export type DislikeTripReviewMutationMutationFn = Apollo.MutationFunction<DislikeTripReviewMutationMutation, DislikeTripReviewMutationMutationVariables>;

/**
 * __useDislikeTripReviewMutationMutation__
 *
 * To run a mutation, you first call `useDislikeTripReviewMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDislikeTripReviewMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dislikeTripReviewMutationMutation, { data, loading, error }] = useDislikeTripReviewMutationMutation({
 *   variables: {
 *      dislikeTripReviewReview: // value for 'dislikeTripReviewReview'
 *   },
 * });
 */
export function useDislikeTripReviewMutationMutation(baseOptions?: Apollo.MutationHookOptions<DislikeTripReviewMutationMutation, DislikeTripReviewMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DislikeTripReviewMutationMutation, DislikeTripReviewMutationMutationVariables>(DislikeTripReviewMutationDocument, options);
      }
export type DislikeTripReviewMutationMutationHookResult = ReturnType<typeof useDislikeTripReviewMutationMutation>;
export type DislikeTripReviewMutationMutationResult = Apollo.MutationResult<DislikeTripReviewMutationMutation>;
export type DislikeTripReviewMutationMutationOptions = Apollo.BaseMutationOptions<DislikeTripReviewMutationMutation, DislikeTripReviewMutationMutationVariables>;
export const SaveTripMutationDocument = gql`
    mutation SaveTripMutation($saveTripTrip: ID) {
  saveTrip(trip: $saveTripTrip) {
    tripCollection {
      trip {
        userSaved
      }
    }
    success
  }
}
    `;
export type SaveTripMutationMutationFn = Apollo.MutationFunction<SaveTripMutationMutation, SaveTripMutationMutationVariables>;

/**
 * __useSaveTripMutationMutation__
 *
 * To run a mutation, you first call `useSaveTripMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveTripMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveTripMutationMutation, { data, loading, error }] = useSaveTripMutationMutation({
 *   variables: {
 *      saveTripTrip: // value for 'saveTripTrip'
 *   },
 * });
 */
export function useSaveTripMutationMutation(baseOptions?: Apollo.MutationHookOptions<SaveTripMutationMutation, SaveTripMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveTripMutationMutation, SaveTripMutationMutationVariables>(SaveTripMutationDocument, options);
      }
export type SaveTripMutationMutationHookResult = ReturnType<typeof useSaveTripMutationMutation>;
export type SaveTripMutationMutationResult = Apollo.MutationResult<SaveTripMutationMutation>;
export type SaveTripMutationMutationOptions = Apollo.BaseMutationOptions<SaveTripMutationMutation, SaveTripMutationMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($updateProfileInput: UpdateProfileInput!) {
  updateProfile(input: $updateProfileInput) {
    profile {
      user {
        id
      }
      about
      tripStatus
      header
    }
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      updateProfileInput: // value for 'updateProfileInput'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($updateUserInput: UpdateUserInput!) {
  updateUser(input: $updateUserInput) {
    user {
      avatar
      username
      id
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const FollowOrUnfollowDocument = gql`
    mutation FollowOrUnfollow($followOrUnfollowInput: FollowOrUnfollowInput!) {
  followOrUnfollow(input: $followOrUnfollowInput) {
    followStatus
  }
}
    `;
export type FollowOrUnfollowMutationFn = Apollo.MutationFunction<FollowOrUnfollowMutation, FollowOrUnfollowMutationVariables>;

/**
 * __useFollowOrUnfollowMutation__
 *
 * To run a mutation, you first call `useFollowOrUnfollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowOrUnfollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followOrUnfollowMutation, { data, loading, error }] = useFollowOrUnfollowMutation({
 *   variables: {
 *      followOrUnfollowInput: // value for 'followOrUnfollowInput'
 *   },
 * });
 */
export function useFollowOrUnfollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowOrUnfollowMutation, FollowOrUnfollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowOrUnfollowMutation, FollowOrUnfollowMutationVariables>(FollowOrUnfollowDocument, options);
      }
export type FollowOrUnfollowMutationHookResult = ReturnType<typeof useFollowOrUnfollowMutation>;
export type FollowOrUnfollowMutationResult = Apollo.MutationResult<FollowOrUnfollowMutation>;
export type FollowOrUnfollowMutationOptions = Apollo.BaseMutationOptions<FollowOrUnfollowMutation, FollowOrUnfollowMutationVariables>;
export const SearchAccessoryDocument = gql`
    query SearchAccessory($name: String, $id: String, $first: Int) {
  allAccessory(
    name_Icontains: $name
    referenceLinks_AccessoryIdInSite_Icontains: $id
    first: $first
  ) {
    edges {
      node {
        id
        name
        imageLink
        category {
          id
          title
        }
      }
    }
  }
}
    `;

/**
 * __useSearchAccessoryQuery__
 *
 * To run a query within a React component, call `useSearchAccessoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchAccessoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchAccessoryQuery({
 *   variables: {
 *      name: // value for 'name'
 *      id: // value for 'id'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useSearchAccessoryQuery(baseOptions?: Apollo.QueryHookOptions<SearchAccessoryQuery, SearchAccessoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchAccessoryQuery, SearchAccessoryQueryVariables>(SearchAccessoryDocument, options);
      }
export function useSearchAccessoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchAccessoryQuery, SearchAccessoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchAccessoryQuery, SearchAccessoryQueryVariables>(SearchAccessoryDocument, options);
        }
export type SearchAccessoryQueryHookResult = ReturnType<typeof useSearchAccessoryQuery>;
export type SearchAccessoryLazyQueryHookResult = ReturnType<typeof useSearchAccessoryLazyQuery>;
export type SearchAccessoryQueryResult = Apollo.QueryResult<SearchAccessoryQuery, SearchAccessoryQueryVariables>;
export const AllArticleDocument = gql`
    query AllArticle($allArticleOffset: Int, $allArticleBefore: String, $allArticleAfter: String, $allArticleFirst: Int, $allArticleLast: Int, $allArticleCategory: ID) {
  allArticle(
    offset: $allArticleOffset
    before: $allArticleBefore
    after: $allArticleAfter
    first: $allArticleFirst
    last: $allArticleLast
    category: $allArticleCategory
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        title
        shortDescription
        likes
        timeToRead
        image
        author {
          username
          avatar
        }
        category {
          title
        }
      }
    }
  }
}
    `;

/**
 * __useAllArticleQuery__
 *
 * To run a query within a React component, call `useAllArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllArticleQuery({
 *   variables: {
 *      allArticleOffset: // value for 'allArticleOffset'
 *      allArticleBefore: // value for 'allArticleBefore'
 *      allArticleAfter: // value for 'allArticleAfter'
 *      allArticleFirst: // value for 'allArticleFirst'
 *      allArticleLast: // value for 'allArticleLast'
 *      allArticleCategory: // value for 'allArticleCategory'
 *   },
 * });
 */
export function useAllArticleQuery(baseOptions?: Apollo.QueryHookOptions<AllArticleQuery, AllArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllArticleQuery, AllArticleQueryVariables>(AllArticleDocument, options);
      }
export function useAllArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllArticleQuery, AllArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllArticleQuery, AllArticleQueryVariables>(AllArticleDocument, options);
        }
export type AllArticleQueryHookResult = ReturnType<typeof useAllArticleQuery>;
export type AllArticleLazyQueryHookResult = ReturnType<typeof useAllArticleLazyQuery>;
export type AllArticleQueryResult = Apollo.QueryResult<AllArticleQuery, AllArticleQueryVariables>;
export const AllArticleCategoryiesDocument = gql`
    query AllArticleCategoryies {
  allArticleCategories {
    edges {
      node {
        id
        title
        svg
      }
    }
  }
}
    `;

/**
 * __useAllArticleCategoryiesQuery__
 *
 * To run a query within a React component, call `useAllArticleCategoryiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllArticleCategoryiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllArticleCategoryiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllArticleCategoryiesQuery(baseOptions?: Apollo.QueryHookOptions<AllArticleCategoryiesQuery, AllArticleCategoryiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllArticleCategoryiesQuery, AllArticleCategoryiesQueryVariables>(AllArticleCategoryiesDocument, options);
      }
export function useAllArticleCategoryiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllArticleCategoryiesQuery, AllArticleCategoryiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllArticleCategoryiesQuery, AllArticleCategoryiesQueryVariables>(AllArticleCategoryiesDocument, options);
        }
export type AllArticleCategoryiesQueryHookResult = ReturnType<typeof useAllArticleCategoryiesQuery>;
export type AllArticleCategoryiesLazyQueryHookResult = ReturnType<typeof useAllArticleCategoryiesLazyQuery>;
export type AllArticleCategoryiesQueryResult = Apollo.QueryResult<AllArticleCategoryiesQuery, AllArticleCategoryiesQueryVariables>;
export const ArticleDocument = gql`
    query Article($articleId: ID!) {
  article(id: $articleId) {
    title
    shortDescription
    content
    createdAt
    likes
    timeToRead
    image
    author {
      id
      username
      avatar
    }
    category {
      title
      id
    }
    activities {
      edges {
        node {
          title
          svg
        }
      }
    }
    places {
      edges {
        node {
          name
        }
      }
    }
    accessories {
      edges {
        node {
          name
          image
        }
      }
    }
    reviewsOfArticle {
      edges {
        node {
          author {
            username
            avatar
          }
          description
        }
      }
    }
  }
}
    `;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      articleId: // value for 'articleId'
 *   },
 * });
 */
export function useArticleQuery(baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const AllTransferTypesDocument = gql`
    query AllTransferTypes {
  allTransferType {
    edges {
      node {
        id
        title
        svg
      }
    }
  }
}
    `;

/**
 * __useAllTransferTypesQuery__
 *
 * To run a query within a React component, call `useAllTransferTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTransferTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTransferTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTransferTypesQuery(baseOptions?: Apollo.QueryHookOptions<AllTransferTypesQuery, AllTransferTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTransferTypesQuery, AllTransferTypesQueryVariables>(AllTransferTypesDocument, options);
      }
export function useAllTransferTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTransferTypesQuery, AllTransferTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTransferTypesQuery, AllTransferTypesQueryVariables>(AllTransferTypesDocument, options);
        }
export type AllTransferTypesQueryHookResult = ReturnType<typeof useAllTransferTypesQuery>;
export type AllTransferTypesLazyQueryHookResult = ReturnType<typeof useAllTransferTypesLazyQuery>;
export type AllTransferTypesQueryResult = Apollo.QueryResult<AllTransferTypesQuery, AllTransferTypesQueryVariables>;
export const AllTripDocument = gql`
    query AllTrip($allTripOffset: Int, $allTripBefore: String, $allTripAfter: String, $allTripFirst: Int, $allTripLast: Int, $allTripCategories: [[ID]]) {
  allTrip(
    offset: $allTripOffset
    before: $allTripBefore
    after: $allTripAfter
    first: $allTripFirst
    last: $allTripLast
    categories_In: $allTripCategories
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        title
        description
        createdAt
        startDate
        endDate
        viewsCount
        defaultImage
        author {
          id
          username
          avatar
        }
        categories {
          edges {
            node {
              title
            }
          }
        }
        country {
          name
        }
        province {
          name
        }
        likes
        userLiked
        places {
          edges {
            node {
              id
            }
          }
        }
        published
        experiences {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAllTripQuery__
 *
 * To run a query within a React component, call `useAllTripQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTripQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTripQuery({
 *   variables: {
 *      allTripOffset: // value for 'allTripOffset'
 *      allTripBefore: // value for 'allTripBefore'
 *      allTripAfter: // value for 'allTripAfter'
 *      allTripFirst: // value for 'allTripFirst'
 *      allTripLast: // value for 'allTripLast'
 *      allTripCategories: // value for 'allTripCategories'
 *   },
 * });
 */
export function useAllTripQuery(baseOptions?: Apollo.QueryHookOptions<AllTripQuery, AllTripQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTripQuery, AllTripQueryVariables>(AllTripDocument, options);
      }
export function useAllTripLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTripQuery, AllTripQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTripQuery, AllTripQueryVariables>(AllTripDocument, options);
        }
export type AllTripQueryHookResult = ReturnType<typeof useAllTripQuery>;
export type AllTripLazyQueryHookResult = ReturnType<typeof useAllTripLazyQuery>;
export type AllTripQueryResult = Apollo.QueryResult<AllTripQuery, AllTripQueryVariables>;
export const AllTripCategoriesDocument = gql`
    query AllTripCategories {
  allTripCategories {
    edges {
      node {
        id
        title
        image
      }
    }
  }
}
    `;

/**
 * __useAllTripCategoriesQuery__
 *
 * To run a query within a React component, call `useAllTripCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTripCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTripCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTripCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllTripCategoriesQuery, AllTripCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTripCategoriesQuery, AllTripCategoriesQueryVariables>(AllTripCategoriesDocument, options);
      }
export function useAllTripCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTripCategoriesQuery, AllTripCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTripCategoriesQuery, AllTripCategoriesQueryVariables>(AllTripCategoriesDocument, options);
        }
export type AllTripCategoriesQueryHookResult = ReturnType<typeof useAllTripCategoriesQuery>;
export type AllTripCategoriesLazyQueryHookResult = ReturnType<typeof useAllTripCategoriesLazyQuery>;
export type AllTripCategoriesQueryResult = Apollo.QueryResult<AllTripCategoriesQuery, AllTripCategoriesQueryVariables>;
export const AllActivitiesDocument = gql`
    query AllActivities {
  allActivities {
    edges {
      node {
        id
        svg
        title
        titleFa
        description
      }
    }
  }
}
    `;

/**
 * __useAllActivitiesQuery__
 *
 * To run a query within a React component, call `useAllActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<AllActivitiesQuery, AllActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllActivitiesQuery, AllActivitiesQueryVariables>(AllActivitiesDocument, options);
      }
export function useAllActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllActivitiesQuery, AllActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllActivitiesQuery, AllActivitiesQueryVariables>(AllActivitiesDocument, options);
        }
export type AllActivitiesQueryHookResult = ReturnType<typeof useAllActivitiesQuery>;
export type AllActivitiesLazyQueryHookResult = ReturnType<typeof useAllActivitiesLazyQuery>;
export type AllActivitiesQueryResult = Apollo.QueryResult<AllActivitiesQuery, AllActivitiesQueryVariables>;
export const TripDetailLikesDocument = gql`
    query TripDetailLikes($tripId: ID!) {
  trip(id: $tripId) {
    likes
    userLiked
  }
}
    `;

/**
 * __useTripDetailLikesQuery__
 *
 * To run a query within a React component, call `useTripDetailLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripDetailLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripDetailLikesQuery({
 *   variables: {
 *      tripId: // value for 'tripId'
 *   },
 * });
 */
export function useTripDetailLikesQuery(baseOptions: Apollo.QueryHookOptions<TripDetailLikesQuery, TripDetailLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TripDetailLikesQuery, TripDetailLikesQueryVariables>(TripDetailLikesDocument, options);
      }
export function useTripDetailLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TripDetailLikesQuery, TripDetailLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TripDetailLikesQuery, TripDetailLikesQueryVariables>(TripDetailLikesDocument, options);
        }
export type TripDetailLikesQueryHookResult = ReturnType<typeof useTripDetailLikesQuery>;
export type TripDetailLikesLazyQueryHookResult = ReturnType<typeof useTripDetailLikesLazyQuery>;
export type TripDetailLikesQueryResult = Apollo.QueryResult<TripDetailLikesQuery, TripDetailLikesQueryVariables>;
export const TripDetailDocument = gql`
    query TripDetail($tripId: ID!) {
  trip(id: $tripId) {
    userLiked
    userSaved
    id
    tripMap
    gpsTrack
    costs
    checkList
    todoList
    published
    activities {
      edges {
        node {
          svg
          title
          titleFa
          id
        }
      }
    }
    accessories {
      edges {
        node {
          id
          likesCount
          brand {
            logo
            name
          }
          image
          imageLink
          name
        }
      }
    }
    companions {
      edges {
        node {
          id
          username
          avatar
        }
      }
    }
    images {
      edges {
        node {
          id
          image
          description
          copyrightName
        }
      }
    }
    videos {
      edges {
        node {
          video
          description
          copyrightName
        }
      }
    }
    title
    description
    createdAt
    startDate
    endDate
    author {
      id
      username
      avatar
    }
    likes
    experiences {
      edges {
        node {
          id
          title
          defaultImage
          description
          place {
            name
          }
          activities {
            edges {
              node {
                id
                title
                titleFa
                svg
              }
            }
          }
          images {
            edges {
              node {
                id
                latitude
                longitude
                description
                image
                copyrightName
              }
            }
          }
        }
      }
    }
    places {
      edges {
        node {
          id
          name
          longitude
          latitude
        }
      }
    }
    transfers {
      edges {
        node {
          id
          duration
          startTime
          src {
            name
            latitude
            longitude
            id
          }
          destination {
            name
            latitude
            longitude
            id
          }
          transferType {
            id
            title
            svg
          }
        }
      }
    }
    defaultImage
    viewsCount
    country {
      id
      name
    }
    province {
      id
      name
    }
    categories {
      edges {
        node {
          id
          title
        }
      }
    }
  }
}
    `;

/**
 * __useTripDetailQuery__
 *
 * To run a query within a React component, call `useTripDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripDetailQuery({
 *   variables: {
 *      tripId: // value for 'tripId'
 *   },
 * });
 */
export function useTripDetailQuery(baseOptions: Apollo.QueryHookOptions<TripDetailQuery, TripDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TripDetailQuery, TripDetailQueryVariables>(TripDetailDocument, options);
      }
export function useTripDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TripDetailQuery, TripDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TripDetailQuery, TripDetailQueryVariables>(TripDetailDocument, options);
        }
export type TripDetailQueryHookResult = ReturnType<typeof useTripDetailQuery>;
export type TripDetailLazyQueryHookResult = ReturnType<typeof useTripDetailLazyQuery>;
export type TripDetailQueryResult = Apollo.QueryResult<TripDetailQuery, TripDetailQueryVariables>;
export const TripReviewsDocument = gql`
    query TripReviews($tripId: ID!) {
  trip(id: $tripId) {
    reviewsOfTrip {
      edges {
        node {
          author {
            id
            username
            avatar
          }
          likesCount
          dislikesCount
          description
          createdAt
          id
          userLiked
        }
      }
    }
  }
}
    `;

/**
 * __useTripReviewsQuery__
 *
 * To run a query within a React component, call `useTripReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripReviewsQuery({
 *   variables: {
 *      tripId: // value for 'tripId'
 *   },
 * });
 */
export function useTripReviewsQuery(baseOptions: Apollo.QueryHookOptions<TripReviewsQuery, TripReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TripReviewsQuery, TripReviewsQueryVariables>(TripReviewsDocument, options);
      }
export function useTripReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TripReviewsQuery, TripReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TripReviewsQuery, TripReviewsQueryVariables>(TripReviewsDocument, options);
        }
export type TripReviewsQueryHookResult = ReturnType<typeof useTripReviewsQuery>;
export type TripReviewsLazyQueryHookResult = ReturnType<typeof useTripReviewsLazyQuery>;
export type TripReviewsQueryResult = Apollo.QueryResult<TripReviewsQuery, TripReviewsQueryVariables>;
export const AllCountriesDocument = gql`
    query AllCountries {
  allCountries {
    edges {
      node {
        name
        id
      }
    }
  }
}
    `;

/**
 * __useAllCountriesQuery__
 *
 * To run a query within a React component, call `useAllCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCountriesQuery(baseOptions?: Apollo.QueryHookOptions<AllCountriesQuery, AllCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCountriesQuery, AllCountriesQueryVariables>(AllCountriesDocument, options);
      }
export function useAllCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCountriesQuery, AllCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCountriesQuery, AllCountriesQueryVariables>(AllCountriesDocument, options);
        }
export type AllCountriesQueryHookResult = ReturnType<typeof useAllCountriesQuery>;
export type AllCountriesLazyQueryHookResult = ReturnType<typeof useAllCountriesLazyQuery>;
export type AllCountriesQueryResult = Apollo.QueryResult<AllCountriesQuery, AllCountriesQueryVariables>;
export const AllProvincesOfCountryDocument = gql`
    query AllProvincesOfCountry($allProvincesCountry: ID) {
  allProvinces(country: $allProvincesCountry) {
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useAllProvincesOfCountryQuery__
 *
 * To run a query within a React component, call `useAllProvincesOfCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProvincesOfCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProvincesOfCountryQuery({
 *   variables: {
 *      allProvincesCountry: // value for 'allProvincesCountry'
 *   },
 * });
 */
export function useAllProvincesOfCountryQuery(baseOptions?: Apollo.QueryHookOptions<AllProvincesOfCountryQuery, AllProvincesOfCountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProvincesOfCountryQuery, AllProvincesOfCountryQueryVariables>(AllProvincesOfCountryDocument, options);
      }
export function useAllProvincesOfCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProvincesOfCountryQuery, AllProvincesOfCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProvincesOfCountryQuery, AllProvincesOfCountryQueryVariables>(AllProvincesOfCountryDocument, options);
        }
export type AllProvincesOfCountryQueryHookResult = ReturnType<typeof useAllProvincesOfCountryQuery>;
export type AllProvincesOfCountryLazyQueryHookResult = ReturnType<typeof useAllProvincesOfCountryLazyQuery>;
export type AllProvincesOfCountryQueryResult = Apollo.QueryResult<AllProvincesOfCountryQuery, AllProvincesOfCountryQueryVariables>;
export const AllCitiesOfProvinceDocument = gql`
    query AllCitiesOfProvince($province: ID!) {
  allCities(province: $province) {
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useAllCitiesOfProvinceQuery__
 *
 * To run a query within a React component, call `useAllCitiesOfProvinceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCitiesOfProvinceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCitiesOfProvinceQuery({
 *   variables: {
 *      province: // value for 'province'
 *   },
 * });
 */
export function useAllCitiesOfProvinceQuery(baseOptions: Apollo.QueryHookOptions<AllCitiesOfProvinceQuery, AllCitiesOfProvinceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCitiesOfProvinceQuery, AllCitiesOfProvinceQueryVariables>(AllCitiesOfProvinceDocument, options);
      }
export function useAllCitiesOfProvinceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCitiesOfProvinceQuery, AllCitiesOfProvinceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCitiesOfProvinceQuery, AllCitiesOfProvinceQueryVariables>(AllCitiesOfProvinceDocument, options);
        }
export type AllCitiesOfProvinceQueryHookResult = ReturnType<typeof useAllCitiesOfProvinceQuery>;
export type AllCitiesOfProvinceLazyQueryHookResult = ReturnType<typeof useAllCitiesOfProvinceLazyQuery>;
export type AllCitiesOfProvinceQueryResult = Apollo.QueryResult<AllCitiesOfProvinceQuery, AllCitiesOfProvinceQueryVariables>;
export const TripReviewLikeStatusDocument = gql`
    query TripReviewLikeStatus($tripReviewId: ID!) {
  tripReview(id: $tripReviewId) {
    userLiked
  }
}
    `;

/**
 * __useTripReviewLikeStatusQuery__
 *
 * To run a query within a React component, call `useTripReviewLikeStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useTripReviewLikeStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTripReviewLikeStatusQuery({
 *   variables: {
 *      tripReviewId: // value for 'tripReviewId'
 *   },
 * });
 */
export function useTripReviewLikeStatusQuery(baseOptions: Apollo.QueryHookOptions<TripReviewLikeStatusQuery, TripReviewLikeStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TripReviewLikeStatusQuery, TripReviewLikeStatusQueryVariables>(TripReviewLikeStatusDocument, options);
      }
export function useTripReviewLikeStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TripReviewLikeStatusQuery, TripReviewLikeStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TripReviewLikeStatusQuery, TripReviewLikeStatusQueryVariables>(TripReviewLikeStatusDocument, options);
        }
export type TripReviewLikeStatusQueryHookResult = ReturnType<typeof useTripReviewLikeStatusQuery>;
export type TripReviewLikeStatusLazyQueryHookResult = ReturnType<typeof useTripReviewLikeStatusLazyQuery>;
export type TripReviewLikeStatusQueryResult = Apollo.QueryResult<TripReviewLikeStatusQuery, TripReviewLikeStatusQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    username
    avatar
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MeDetailDocument = gql`
    query MeDetail {
  me {
    ...UserFields
    profilemodel {
      ...ProfileFields
    }
    trips {
      edges {
        node {
          ...TripSimpleFields
        }
      }
    }
  }
}
    ${UserFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}
${TripSimpleFieldsFragmentDoc}`;

/**
 * __useMeDetailQuery__
 *
 * To run a query within a React component, call `useMeDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeDetailQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeDetailQuery(baseOptions?: Apollo.QueryHookOptions<MeDetailQuery, MeDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeDetailQuery, MeDetailQueryVariables>(MeDetailDocument, options);
      }
export function useMeDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeDetailQuery, MeDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeDetailQuery, MeDetailQueryVariables>(MeDetailDocument, options);
        }
export type MeDetailQueryHookResult = ReturnType<typeof useMeDetailQuery>;
export type MeDetailLazyQueryHookResult = ReturnType<typeof useMeDetailLazyQuery>;
export type MeDetailQueryResult = Apollo.QueryResult<MeDetailQuery, MeDetailQueryVariables>;
export const UserDetailDocument = gql`
    query UserDetail($username: String!, $followedUsername: String!) {
  user(username: $username) {
    ...UserFields
    profilemodel {
      ...ProfileFields
    }
    trips {
      edges {
        node {
          ...TripSimpleFields
        }
      }
    }
  }
  followedUser(username: $followedUsername)
}
    ${UserFieldsFragmentDoc}
${ProfileFieldsFragmentDoc}
${TripSimpleFieldsFragmentDoc}`;

/**
 * __useUserDetailQuery__
 *
 * To run a query within a React component, call `useUserDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDetailQuery({
 *   variables: {
 *      username: // value for 'username'
 *      followedUsername: // value for 'followedUsername'
 *   },
 * });
 */
export function useUserDetailQuery(baseOptions: Apollo.QueryHookOptions<UserDetailQuery, UserDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserDetailQuery, UserDetailQueryVariables>(UserDetailDocument, options);
      }
export function useUserDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDetailQuery, UserDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserDetailQuery, UserDetailQueryVariables>(UserDetailDocument, options);
        }
export type UserDetailQueryHookResult = ReturnType<typeof useUserDetailQuery>;
export type UserDetailLazyQueryHookResult = ReturnType<typeof useUserDetailLazyQuery>;
export type UserDetailQueryResult = Apollo.QueryResult<UserDetailQuery, UserDetailQueryVariables>;
export const IsFollowedDocument = gql`
    query isFollowed($followedUsername: String!) {
  followedUser(username: $followedUsername)
}
    `;

/**
 * __useIsFollowedQuery__
 *
 * To run a query within a React component, call `useIsFollowedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsFollowedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsFollowedQuery({
 *   variables: {
 *      followedUsername: // value for 'followedUsername'
 *   },
 * });
 */
export function useIsFollowedQuery(baseOptions: Apollo.QueryHookOptions<IsFollowedQuery, IsFollowedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsFollowedQuery, IsFollowedQueryVariables>(IsFollowedDocument, options);
      }
export function useIsFollowedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsFollowedQuery, IsFollowedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsFollowedQuery, IsFollowedQueryVariables>(IsFollowedDocument, options);
        }
export type IsFollowedQueryHookResult = ReturnType<typeof useIsFollowedQuery>;
export type IsFollowedLazyQueryHookResult = ReturnType<typeof useIsFollowedLazyQuery>;
export type IsFollowedQueryResult = Apollo.QueryResult<IsFollowedQuery, IsFollowedQueryVariables>;
export const UserFollowingsDocument = gql`
    query userFollowings($username: String!) {
  user(username: $username) {
    followingUsers {
      edges {
        node {
          followed {
            username
            avatar
            id
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUserFollowingsQuery__
 *
 * To run a query within a React component, call `useUserFollowingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFollowingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFollowingsQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserFollowingsQuery(baseOptions: Apollo.QueryHookOptions<UserFollowingsQuery, UserFollowingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserFollowingsQuery, UserFollowingsQueryVariables>(UserFollowingsDocument, options);
      }
export function useUserFollowingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserFollowingsQuery, UserFollowingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserFollowingsQuery, UserFollowingsQueryVariables>(UserFollowingsDocument, options);
        }
export type UserFollowingsQueryHookResult = ReturnType<typeof useUserFollowingsQuery>;
export type UserFollowingsLazyQueryHookResult = ReturnType<typeof useUserFollowingsLazyQuery>;
export type UserFollowingsQueryResult = Apollo.QueryResult<UserFollowingsQuery, UserFollowingsQueryVariables>;
export const UserFollowersDocument = gql`
    query UserFollowers($username: String!) {
  user(username: $username) {
    followerUsers {
      edges {
        node {
          follower {
            id
            username
            avatar
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUserFollowersQuery__
 *
 * To run a query within a React component, call `useUserFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFollowersQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserFollowersQuery(baseOptions: Apollo.QueryHookOptions<UserFollowersQuery, UserFollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserFollowersQuery, UserFollowersQueryVariables>(UserFollowersDocument, options);
      }
export function useUserFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserFollowersQuery, UserFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserFollowersQuery, UserFollowersQueryVariables>(UserFollowersDocument, options);
        }
export type UserFollowersQueryHookResult = ReturnType<typeof useUserFollowersQuery>;
export type UserFollowersLazyQueryHookResult = ReturnType<typeof useUserFollowersLazyQuery>;
export type UserFollowersQueryResult = Apollo.QueryResult<UserFollowersQuery, UserFollowersQueryVariables>;
export const MeFollowingsDocument = gql`
    query MeFollowings {
  me {
    followingUsers {
      edges {
        node {
          followed {
            id
            username
            avatar
          }
        }
      }
    }
  }
}
    `;

/**
 * __useMeFollowingsQuery__
 *
 * To run a query within a React component, call `useMeFollowingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeFollowingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeFollowingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeFollowingsQuery(baseOptions?: Apollo.QueryHookOptions<MeFollowingsQuery, MeFollowingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeFollowingsQuery, MeFollowingsQueryVariables>(MeFollowingsDocument, options);
      }
export function useMeFollowingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeFollowingsQuery, MeFollowingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeFollowingsQuery, MeFollowingsQueryVariables>(MeFollowingsDocument, options);
        }
export type MeFollowingsQueryHookResult = ReturnType<typeof useMeFollowingsQuery>;
export type MeFollowingsLazyQueryHookResult = ReturnType<typeof useMeFollowingsLazyQuery>;
export type MeFollowingsQueryResult = Apollo.QueryResult<MeFollowingsQuery, MeFollowingsQueryVariables>;
export const MeFollowersDocument = gql`
    query MeFollowers {
  me {
    followerUsers {
      edges {
        node {
          follower {
            id
            username
            avatar
          }
        }
      }
    }
  }
}
    `;

/**
 * __useMeFollowersQuery__
 *
 * To run a query within a React component, call `useMeFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeFollowersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeFollowersQuery(baseOptions?: Apollo.QueryHookOptions<MeFollowersQuery, MeFollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeFollowersQuery, MeFollowersQueryVariables>(MeFollowersDocument, options);
      }
export function useMeFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeFollowersQuery, MeFollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeFollowersQuery, MeFollowersQueryVariables>(MeFollowersDocument, options);
        }
export type MeFollowersQueryHookResult = ReturnType<typeof useMeFollowersQuery>;
export type MeFollowersLazyQueryHookResult = ReturnType<typeof useMeFollowersLazyQuery>;
export type MeFollowersQueryResult = Apollo.QueryResult<MeFollowersQuery, MeFollowersQueryVariables>;
export const AllProfilesDocument = gql`
    query AllProfiles {
  allUsers {
    edges {
      node {
        id
        username
        avatar
        trips {
          edges {
            node {
              id
            }
          }
        }
        profilemodel {
          tripStatus
          header
          about
          followersCount
          followingsCount
          achievements {
            edges {
              node {
                title
                image
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAllProfilesQuery__
 *
 * To run a query within a React component, call `useAllProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProfilesQuery(baseOptions?: Apollo.QueryHookOptions<AllProfilesQuery, AllProfilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProfilesQuery, AllProfilesQueryVariables>(AllProfilesDocument, options);
      }
export function useAllProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProfilesQuery, AllProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProfilesQuery, AllProfilesQueryVariables>(AllProfilesDocument, options);
        }
export type AllProfilesQueryHookResult = ReturnType<typeof useAllProfilesQuery>;
export type AllProfilesLazyQueryHookResult = ReturnType<typeof useAllProfilesLazyQuery>;
export type AllProfilesQueryResult = Apollo.QueryResult<AllProfilesQuery, AllProfilesQueryVariables>;
export const MeSavedTripsDocument = gql`
    query MeSavedTrips {
  myTripCollection {
    edges {
      node {
        trip {
          ...TripSimpleFields
        }
      }
    }
  }
}
    ${TripSimpleFieldsFragmentDoc}`;

/**
 * __useMeSavedTripsQuery__
 *
 * To run a query within a React component, call `useMeSavedTripsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeSavedTripsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeSavedTripsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeSavedTripsQuery(baseOptions?: Apollo.QueryHookOptions<MeSavedTripsQuery, MeSavedTripsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeSavedTripsQuery, MeSavedTripsQueryVariables>(MeSavedTripsDocument, options);
      }
export function useMeSavedTripsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeSavedTripsQuery, MeSavedTripsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeSavedTripsQuery, MeSavedTripsQueryVariables>(MeSavedTripsDocument, options);
        }
export type MeSavedTripsQueryHookResult = ReturnType<typeof useMeSavedTripsQuery>;
export type MeSavedTripsLazyQueryHookResult = ReturnType<typeof useMeSavedTripsLazyQuery>;
export type MeSavedTripsQueryResult = Apollo.QueryResult<MeSavedTripsQuery, MeSavedTripsQueryVariables>;
export const MyTripsDocument = gql`
    query MyTrips($published: Boolean) {
  allMyTrip(published: $published) {
    edges {
      node {
        ...TripSimpleFields
      }
    }
  }
}
    ${TripSimpleFieldsFragmentDoc}`;

/**
 * __useMyTripsQuery__
 *
 * To run a query within a React component, call `useMyTripsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyTripsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyTripsQuery({
 *   variables: {
 *      published: // value for 'published'
 *   },
 * });
 */
export function useMyTripsQuery(baseOptions?: Apollo.QueryHookOptions<MyTripsQuery, MyTripsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyTripsQuery, MyTripsQueryVariables>(MyTripsDocument, options);
      }
export function useMyTripsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyTripsQuery, MyTripsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyTripsQuery, MyTripsQueryVariables>(MyTripsDocument, options);
        }
export type MyTripsQueryHookResult = ReturnType<typeof useMyTripsQuery>;
export type MyTripsLazyQueryHookResult = ReturnType<typeof useMyTripsLazyQuery>;
export type MyTripsQueryResult = Apollo.QueryResult<MyTripsQuery, MyTripsQueryVariables>;
export const DeleteTripDocument = gql`
    mutation DeleteTrip($deleteTripTripId: ID!) {
  deleteTrip(tripId: $deleteTripTripId) {
    deleted
  }
}
    `;
export type DeleteTripMutationFn = Apollo.MutationFunction<DeleteTripMutation, DeleteTripMutationVariables>;

/**
 * __useDeleteTripMutation__
 *
 * To run a mutation, you first call `useDeleteTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTripMutation, { data, loading, error }] = useDeleteTripMutation({
 *   variables: {
 *      deleteTripTripId: // value for 'deleteTripTripId'
 *   },
 * });
 */
export function useDeleteTripMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTripMutation, DeleteTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTripMutation, DeleteTripMutationVariables>(DeleteTripDocument, options);
      }
export type DeleteTripMutationHookResult = ReturnType<typeof useDeleteTripMutation>;
export type DeleteTripMutationResult = Apollo.MutationResult<DeleteTripMutation>;
export type DeleteTripMutationOptions = Apollo.BaseMutationOptions<DeleteTripMutation, DeleteTripMutationVariables>;
export const PublisTripDocument = gql`
    mutation PublisTrip($tripId: ID!) {
  publishTrip(tripId: $tripId) {
    success
    errors
    trip {
      published
    }
  }
}
    `;
export type PublisTripMutationFn = Apollo.MutationFunction<PublisTripMutation, PublisTripMutationVariables>;

/**
 * __usePublisTripMutation__
 *
 * To run a mutation, you first call `usePublisTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublisTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publisTripMutation, { data, loading, error }] = usePublisTripMutation({
 *   variables: {
 *      tripId: // value for 'tripId'
 *   },
 * });
 */
export function usePublisTripMutation(baseOptions?: Apollo.MutationHookOptions<PublisTripMutation, PublisTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PublisTripMutation, PublisTripMutationVariables>(PublisTripDocument, options);
      }
export type PublisTripMutationHookResult = ReturnType<typeof usePublisTripMutation>;
export type PublisTripMutationResult = Apollo.MutationResult<PublisTripMutation>;
export type PublisTripMutationOptions = Apollo.BaseMutationOptions<PublisTripMutation, PublisTripMutationVariables>;
export const UnPublisTripDocument = gql`
    mutation UnPublisTrip($tripId: ID!) {
  undoPublishTrip(tripId: $tripId) {
    success
    errors
    trip {
      published
    }
  }
}
    `;
export type UnPublisTripMutationFn = Apollo.MutationFunction<UnPublisTripMutation, UnPublisTripMutationVariables>;

/**
 * __useUnPublisTripMutation__
 *
 * To run a mutation, you first call `useUnPublisTripMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnPublisTripMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unPublisTripMutation, { data, loading, error }] = useUnPublisTripMutation({
 *   variables: {
 *      tripId: // value for 'tripId'
 *   },
 * });
 */
export function useUnPublisTripMutation(baseOptions?: Apollo.MutationHookOptions<UnPublisTripMutation, UnPublisTripMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnPublisTripMutation, UnPublisTripMutationVariables>(UnPublisTripDocument, options);
      }
export type UnPublisTripMutationHookResult = ReturnType<typeof useUnPublisTripMutation>;
export type UnPublisTripMutationResult = Apollo.MutationResult<UnPublisTripMutation>;
export type UnPublisTripMutationOptions = Apollo.BaseMutationOptions<UnPublisTripMutation, UnPublisTripMutationVariables>;
export const SearchUsernameDocument = gql`
    query SearchUsername($username: String, $first: Int) {
  allUsers(username_Icontains: $username, first: $first) {
    edges {
      node {
        username
        id
        avatar
      }
    }
  }
}
    `;

/**
 * __useSearchUsernameQuery__
 *
 * To run a query within a React component, call `useSearchUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useSearchUsernameQuery(baseOptions?: Apollo.QueryHookOptions<SearchUsernameQuery, SearchUsernameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUsernameQuery, SearchUsernameQueryVariables>(SearchUsernameDocument, options);
      }
export function useSearchUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUsernameQuery, SearchUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUsernameQuery, SearchUsernameQueryVariables>(SearchUsernameDocument, options);
        }
export type SearchUsernameQueryHookResult = ReturnType<typeof useSearchUsernameQuery>;
export type SearchUsernameLazyQueryHookResult = ReturnType<typeof useSearchUsernameLazyQuery>;
export type SearchUsernameQueryResult = Apollo.QueryResult<SearchUsernameQuery, SearchUsernameQueryVariables>;
export const namedOperations = {
  Query: {
    SearchAccessory: 'SearchAccessory',
    AllArticle: 'AllArticle',
    AllArticleCategoryies: 'AllArticleCategoryies',
    Article: 'Article',
    AllTransferTypes: 'AllTransferTypes',
    AllTrip: 'AllTrip',
    AllTripCategories: 'AllTripCategories',
    AllActivities: 'AllActivities',
    TripDetailLikes: 'TripDetailLikes',
    TripDetail: 'TripDetail',
    TripReviews: 'TripReviews',
    AllCountries: 'AllCountries',
    AllProvincesOfCountry: 'AllProvincesOfCountry',
    AllCitiesOfProvince: 'AllCitiesOfProvince',
    TripReviewLikeStatus: 'TripReviewLikeStatus',
    Me: 'Me',
    MeDetail: 'MeDetail',
    UserDetail: 'UserDetail',
    isFollowed: 'isFollowed',
    userFollowings: 'userFollowings',
    UserFollowers: 'UserFollowers',
    MeFollowings: 'MeFollowings',
    MeFollowers: 'MeFollowers',
    AllProfiles: 'AllProfiles',
    MeSavedTrips: 'MeSavedTrips',
    MyTrips: 'MyTrips',
    SearchUsername: 'SearchUsername'
  },
  Mutation: {
    VerifySms: 'VerifySms',
    RegisterSms: 'RegisterSms',
    RefreshToken: 'RefreshToken',
    ResetPasswordSms: 'ResetPasswordSms',
    ForgotPasswordSms: 'ForgotPasswordSms',
    TokenAuth: 'TokenAuth',
    ResendVerificationSms: 'ResendVerificationSms',
    PasswordChange: 'PasswordChange',
    UsernameChange: 'UsernameChange',
    CreateSinglTransfer: 'CreateSinglTransfer',
    DeleteSingleTransfer: 'DeleteSingleTransfer',
    LikeTrip: 'LikeTrip',
    CreateTripReview: 'CreateTripReview',
    CreateInitialTrip: 'CreateInitialTrip',
    UpdateTrip: 'UpdateTrip',
    LikeTripReviewMutation: 'LikeTripReviewMutation',
    DislikeTripReviewMutation: 'DislikeTripReviewMutation',
    SaveTripMutation: 'SaveTripMutation',
    UpdateProfile: 'UpdateProfile',
    UpdateUser: 'UpdateUser',
    FollowOrUnfollow: 'FollowOrUnfollow',
    DeleteTrip: 'DeleteTrip',
    PublisTrip: 'PublisTrip',
    UnPublisTrip: 'UnPublisTrip'
  },
  Fragment: {
    TripSimpleFields: 'TripSimpleFields',
    UserFields: 'UserFields',
    ProfileFields: 'ProfileFields'
  }
}