import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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

export type AccessoryCategoryType = Node & {
  __typename?: 'AccessoryCategoryType';
  /** The ID of the object. */
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  accessorymodelSet: AccessoryTypeConnection;
};


export type AccessoryCategoryTypeAccessorymodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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

export type AccessoryLikeType = Node & {
  __typename?: 'AccessoryLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  accessory: AccessoryType;
  users: UserTypeConnection;
};


export type AccessoryLikeTypeUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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
  site: AccessorySiteTypeConnection;
  link?: Maybe<Scalars['String']>;
  accessorymodelSet: AccessoryTypeConnection;
};


export type AccessoryReferenceyTypeSiteArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type AccessoryReferenceyTypeAccessorymodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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

export type AccessorySiteType = Node & {
  __typename?: 'AccessorySiteType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  logo: Scalars['String'];
  serviceZone: ServiceZoneTypeConnection;
  isWorldwide: Scalars['Boolean'];
  accessoryreferencemodelSet: AccessoryReferenceyTypeConnection;
};


export type AccessorySiteTypeServiceZoneArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
};


export type AccessorySiteTypeAccessoryreferencemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  site?: Maybe<Array<Maybe<Scalars['ID']>>>;
  link?: Maybe<Scalars['String']>;
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
  brand?: Maybe<AccessoryBrandType>;
  category: AccessoryCategoryTypeConnection;
  image: Scalars['String'];
  likes: Scalars['Int'];
  price: Scalars['Decimal'];
  discountPrice?: Maybe<Scalars['Decimal']>;
  priceUpdateDate?: Maybe<Scalars['Date']>;
  referenceLinks: AccessoryReferenceyTypeConnection;
  accessoryLikes?: Maybe<AccessoryLikeType>;
};


export type AccessoryTypeCategoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type AccessoryTypeReferenceLinksArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  site?: Maybe<Array<Maybe<Scalars['ID']>>>;
  link?: Maybe<Scalars['String']>;
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
  uuid: Scalars['String'];
  title: Scalars['String'];
  image: Scalars['String'];
  articlemodelSet: ArticleTypeConnection;
};


export type ArticleCategoryTypeArticlemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
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

export type ArticleImageType = Node & {
  __typename?: 'ArticleImageType';
  /** The ID of the object. */
  id: Scalars['ID'];
  uuid: Scalars['String'];
  image: Scalars['String'];
  isDefault: Scalars['Boolean'];
  subject: Scalars['String'];
  description: Scalars['String'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  articlemodelSet: ArticleTypeConnection;
};


export type ArticleImageTypeArticlemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};

export type ArticleImageTypeConnection = {
  __typename?: 'ArticleImageTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleImageTypeEdge>>;
};

/** A Relay edge containing a `ArticleImageType` and its cursor. */
export type ArticleImageTypeEdge = {
  __typename?: 'ArticleImageTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ArticleImageType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ArticleLikeType = Node & {
  __typename?: 'ArticleLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  article: ArticleType;
  users: UserTypeConnection;
};


export type ArticleLikeTypeUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ArticleLikeTypeConnection = {
  __typename?: 'ArticleLikeTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleLikeTypeEdge>>;
};

/** A Relay edge containing a `ArticleLikeType` and its cursor. */
export type ArticleLikeTypeEdge = {
  __typename?: 'ArticleLikeTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ArticleLikeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ArticleReviewDisLikeType = Node & {
  __typename?: 'ArticleReviewDisLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  review: ArticleReviewType;
  users: UserTypeConnection;
};


export type ArticleReviewDisLikeTypeUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ArticleReviewDisLikeTypeConnection = {
  __typename?: 'ArticleReviewDisLikeTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ArticleReviewDisLikeTypeEdge>>;
};

/** A Relay edge containing a `ArticleReviewDisLikeType` and its cursor. */
export type ArticleReviewDisLikeTypeEdge = {
  __typename?: 'ArticleReviewDisLikeTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ArticleReviewDisLikeType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ArticleReviewLikeType = Node & {
  __typename?: 'ArticleReviewLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  review: ArticleReviewType;
  users: UserTypeConnection;
};


export type ArticleReviewLikeTypeUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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
  uuid: Scalars['String'];
  subject: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  author: UserType;
  articleReviewLikes?: Maybe<ArticleReviewLikeType>;
  articleReviewDisLikes?: Maybe<ArticleReviewDisLikeType>;
  articlemodelSet: ArticleTypeConnection;
};


export type ArticleReviewTypeArticlemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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
  uuid: Scalars['String'];
  title: Scalars['String'];
  shortDescription: Scalars['String'];
  createdAt: Scalars['DateTime'];
  author: UserTypeConnection;
  activities: TripActivitieTypeConnection;
  category: ArticleCategoryTypeConnection;
  images: ArticleImageTypeConnection;
  reviews: ArticleReviewTypeConnection;
  places: PlaceTypeConnection;
  likes: Scalars['Int'];
  articleLikes?: Maybe<ArticleLikeType>;
};


export type ArticleTypeAuthorArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type ArticleTypeActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type ArticleTypeCategoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type ArticleTypeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
};


export type ArticleTypeReviewsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Scalars['ID']>;
};


export type ArticleTypePlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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

export type CountryType = Node & {
  __typename?: 'CountryType';
  /** The ID of the object. */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  alpha2?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  unicodeFlag?: Maybe<Scalars['String']>;
  tourmodelSet: TourTypeConnection;
  tripmodelSet: TripTypeConnection;
  plansCountry: TripPlanTypeConnection;
};


export type CountryTypeTourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['UUID']>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type CountryTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type CountryTypePlansCountryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
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

/** create trip mutation. */
export type CreateTrip = {
  __typename?: 'CreateTrip';
  trip?: Maybe<TripType>;
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
};

export type CreateTripPlanInput = {
  planInput?: Maybe<TripPlanInput>;
  planRelatedInput?: Maybe<TripPlanRelatedInput>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTripPlanPayload = {
  __typename?: 'CreateTripPlanPayload';
  plan?: Maybe<TripPlanType>;
  success?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTripReviewInput = {
  subject?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  tripId: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTripReviewPayload = {
  __typename?: 'CreateTripReviewPayload';
  review?: Maybe<TripReviewType>;
  success?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
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

/** delete trip mutation.  */
export type DeleteTrip = {
  __typename?: 'DeleteTrip';
  deleted?: Maybe<Scalars['Boolean']>;
};

/** delete trip plan mutation.  */
export type DeleteTripPlan = {
  __typename?: 'DeleteTripPlan';
  deleted?: Maybe<Scalars['Boolean']>;
};

/** delete trip review mutation.  */
export type DeleteTripReview = {
  __typename?: 'DeleteTripReview';
  deleted?: Maybe<Scalars['Boolean']>;
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
  discountcollectionsmodelSet: DiscountCollectionsTypeConnection;
};


export type DiscountTypeDiscountcollectionsmodelSetArgs = {
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
  discountmodelSet: DiscountTypeConnection;
};


export type DiscountTypeTypeDiscountmodelSetArgs = {
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
  user: UserType;
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


export type IdInputType = {
  id?: Maybe<Scalars['UUID']>;
};


export type Mutation = {
  __typename?: 'Mutation';
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
  /** create trip mutation. */
  createTrip?: Maybe<CreateTrip>;
  createTripLike?: Maybe<CreateTripLike>;
  createTripReview?: Maybe<CreateTripReviewPayload>;
  createTripImages?: Maybe<CreateTripImages>;
  createTripPlan?: Maybe<CreateTripPlanPayload>;
  /** delete trip mutation.  */
  deleteTrip?: Maybe<DeleteTrip>;
  /** delete trip review mutation.  */
  deleteTripReview?: Maybe<DeleteTripReview>;
  /** delete trip plan mutation.  */
  deleteTripPan?: Maybe<DeleteTripPlan>;
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
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
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
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
  updateProfile?: Maybe<UpdateProfilePayload>;
  followOrUnfollow?: Maybe<FollowOrUnfollowPayload>;
  /** Social Auth Mutation for Relay */
  socialAuth?: Maybe<SocialAuthPayload>;
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


export type MutationCreateTripArgs = {
  tripData: TripInput;
  tripRelatedData: TripRelatedInput;
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


export type MutationCreateTripPlanArgs = {
  input: CreateTripPlanInput;
};


export type MutationDeleteTripArgs = {
  tripId: Scalars['ID'];
};


export type MutationDeleteTripReviewArgs = {
  tripReviewId: Scalars['ID'];
};


export type MutationDeleteTripPanArgs = {
  tripPlanId: Scalars['ID'];
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


export type MutationPasswordChangeArgs = {
  oldPassword: Scalars['String'];
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


export type MutationTokenAuthArgs = {
  email: Scalars['String'];
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


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationFollowOrUnfollowArgs = {
  input: FollowOrUnfollowInput;
};


export type MutationSocialAuthArgs = {
  input: SocialAuthInput;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  token?: Maybe<Scalars['String']>;
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
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
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
  savedPlaces: PlaceTypeConnection;
};


export type PlaceCollectionsTypeSavedPlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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
  user: UserTypeConnection;
  feel: PlaceFeelFeel;
};


export type PlaceFeelTypeUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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
  isDefault?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type PlaceImageType = Node & {
  __typename?: 'PlaceImageType';
  /** The ID of the object. */
  id: Scalars['ID'];
  uuid: Scalars['UUID'];
  image: Scalars['String'];
  isDefault: Scalars['Boolean'];
  subject: Scalars['String'];
  description: Scalars['String'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  placemodelSet: PlaceTypeConnection;
};


export type PlaceImageTypePlacemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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
  uuid: Scalars['UUID'];
  name: Scalars['String'];
  description: Scalars['String'];
  images: PlaceImageTypeConnection;
  longitude: Scalars['Decimal'];
  latitude: Scalars['Decimal'];
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  facilities?: Maybe<Scalars['JSONString']>;
  tourmodelSet: TourTypeConnection;
  tripmodelSet: TripTypeConnection;
  plansPlaces: TripPlanTypeConnection;
  placeFeels?: Maybe<PlaceFeelType>;
  articlemodelSet: ArticleTypeConnection;
  placecollectionsmodelSet: PlaceCollectionsTypeConnection;
};


export type PlaceTypeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  isDefault?: Maybe<Scalars['Boolean']>;
};


export type PlaceTypeTourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['UUID']>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type PlaceTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type PlaceTypePlansPlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type PlaceTypeArticlemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type PlaceTypePlacecollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  savedPlaces?: Maybe<Array<Maybe<Scalars['ID']>>>;
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

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProfileEdge>>;
};

/** A Relay edge containing a `Profile` and its cursor. */
export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  /** The item at the end of the edge */
  node?: Maybe<ProfileType>;
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
  user: UserType;
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

export type Query = {
  __typename?: 'Query';
  /** The ID of the object */
  placeCollection?: Maybe<PlaceCollectionsType>;
  /** The ID of the object */
  accessoryCollection?: Maybe<AccessoryCollectionsType>;
  myAccessoryCollection?: Maybe<AccessoryCollectionsTypeConnection>;
  /** The ID of the object */
  tourCollection?: Maybe<TourCollectionsType>;
  myTourCollection?: Maybe<TourCollectionsTypeConnection>;
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
  tripPlan?: Maybe<TripPlanType>;
  allTripPlan?: Maybe<TripPlanTypeConnection>;
  /** The ID of the object */
  myTimeLine?: Maybe<TripType>;
  allMyTimeLine?: Maybe<TripTypeConnection>;
  /** The ID of the object */
  tripReview?: Maybe<TripReviewType>;
  allTripReview?: Maybe<TripReviewTypeConnection>;
  me?: Maybe<UserNode>;
  /** The ID of the object */
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
  /** The ID of the object */
  profile?: Maybe<ProfileType>;
  allProfile?: Maybe<ProfileConnection>;
};


export type QueryPlaceCollectionArgs = {
  id: Scalars['ID'];
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
  savedAccessories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryTourCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryMyTourCollectionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  savedTours?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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
  title?: Maybe<Scalars['String']>;
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
  name?: Maybe<Scalars['String']>;
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
  uuid?: Maybe<Scalars['UUID']>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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
  trip?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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
  uuid?: Maybe<Scalars['UUID']>;
  trip?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Scalars['ID']>;
  likesCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  status_Archived?: Maybe<Scalars['Boolean']>;
  status_Verified?: Maybe<Scalars['Boolean']>;
  status_SecondaryEmail?: Maybe<Scalars['String']>;
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryAllProfileArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  revoked?: Maybe<Scalars['Int']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
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

export type ServiceZoneType = Node & {
  __typename?: 'ServiceZoneType';
  /** The ID of the object. */
  id: Scalars['ID'];
  country: Scalars['String'];
  accessorysitemodelSet: AccessorySiteTypeConnection;
};


export type ServiceZoneTypeAccessorysitemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type ServiceZoneTypeConnection = {
  __typename?: 'ServiceZoneTypeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ServiceZoneTypeEdge>>;
};

/** A Relay edge containing a `ServiceZoneType` and its cursor. */
export type ServiceZoneTypeEdge = {
  __typename?: 'ServiceZoneTypeEdge';
  /** The item at the end of the edge */
  node?: Maybe<ServiceZoneType>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
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
  uuid: Scalars['UUID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image: Scalars['String'];
};

export type TourCollectionsType = Node & {
  __typename?: 'TourCollectionsType';
  /** The ID of the object. */
  id: Scalars['ID'];
  user: UserType;
  savedTours: TourTypeConnection;
};


export type TourCollectionsTypeSavedToursArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['UUID']>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  uuid: Scalars['UUID'];
  tour: TourType;
  subject: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  author: UserType;
  likes: Scalars['Int'];
};

export type TourType = Node & {
  __typename?: 'TourType';
  /** The ID of the object. */
  id: Scalars['ID'];
  uuid: Scalars['UUID'];
  title: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  published: Scalars['Boolean'];
  price: Scalars['Decimal'];
  discountPrice?: Maybe<Scalars['Decimal']>;
  capacity: Scalars['Int'];
  capacityLeft: Scalars['Int'];
  likes: Scalars['Int'];
  author?: Maybe<UserType>;
  activities: TripActivitieTypeConnection;
  category: TripCategoryTypeConnection;
  Places: PlaceTypeConnection;
  country?: Maybe<CountryType>;
  tourreviewmodelSet: Array<TourReviewType>;
  userregisteredtourmodelSet: UserRegisteredTourTypeConnection;
  tourLike: Array<TourLikeType>;
  tourcollectionsmodelSet: TourCollectionsTypeConnection;
};


export type TourTypeActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type TourTypeCategoryArgs = {
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
  name?: Maybe<Scalars['String']>;
};


export type TourTypeUserregisteredtourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TourTypeTourcollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  savedTours?: Maybe<Array<Maybe<Scalars['ID']>>>;
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

export type TripActivitieType = Node & {
  __typename?: 'TripActivitieType';
  /** The ID of the object. */
  id: Scalars['ID'];
  uuid: Scalars['UUID'];
  title: Scalars['String'];
  tourmodelSet: TourTypeConnection;
  tripmodelSet: TripTypeConnection;
  plansActivities: TripPlanTypeConnection;
  articlemodelSet: ArticleTypeConnection;
};


export type TripActivitieTypeTourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['UUID']>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type TripActivitieTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type TripActivitieTypePlansActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type TripActivitieTypeArticlemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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
  uuid: Scalars['UUID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  tourmodelSet: TourTypeConnection;
  tripmodelSet: TripTypeConnection;
  plansCategory: TripPlanTypeConnection;
};


export type TripCategoryTypeTourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['UUID']>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type TripCategoryTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type TripCategoryTypePlansCategoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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
  savedTrips: TripTypeConnection;
};


export type TripCollectionsTypeSavedTripsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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
  isDefault?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type TripImageType = Node & {
  __typename?: 'TripImageType';
  /** The ID of the object. */
  id: Scalars['ID'];
  uuid: Scalars['UUID'];
  image: Scalars['String'];
  subject?: Maybe<Scalars['String']>;
  isDefault: Scalars['Boolean'];
  description: Scalars['String'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  tripmodelSet: TripTypeConnection;
  plansImages: TripPlanTypeConnection;
};


export type TripImageTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type TripImageTypePlansImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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
};

export type TripLikeType = Node & {
  __typename?: 'TripLikeType';
  /** The ID of the object. */
  id: Scalars['ID'];
  trip: TripType;
  users: UserTypeConnection;
};


export type TripLikeTypeUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
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
  uuid: Scalars['UUID'];
  title: Scalars['String'];
  description: Scalars['String'];
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
  category: TripCategoryTypeConnection;
  creator?: Maybe<UserType>;
  companions: UserTypeConnection;
  Places: PlaceTypeConnection;
  country?: Maybe<CountryType>;
};


export type TripPlanTypeImagesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type TripPlanTypeActivitiesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type TripPlanTypeCategoryArgs = {
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
};


export type TripPlanTypePlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
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
  activities?: Maybe<Array<Maybe<IdInputType>>>;
  category?: Maybe<Array<Maybe<IdInputType>>>;
  companions?: Maybe<Array<Maybe<IdInputType>>>;
  images?: Maybe<Array<Maybe<IdInputType>>>;
  reviews?: Maybe<Array<Maybe<IdInputType>>>;
  Places?: Maybe<Array<Maybe<IdInputType>>>;
  accessories?: Maybe<Array<Maybe<IdInputType>>>;
  transfers?: Maybe<Array<Maybe<IdInputType>>>;
  accommodation?: Maybe<Array<Maybe<IdInputType>>>;
  countryId?: Maybe<Array<Maybe<IdInputType>>>;
};

/** An enumeration. */
export enum TripReviewLikeModelValue {
  /** Up */
  A_1 = 'A_1',
  /** Down */
  '1' = '_1'
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
  uuid: Scalars['UUID'];
  trip: TripType;
  subject: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  author: UserType;
  likesCount: Scalars['Int'];
  likes: Scalars['Int'];
  tripreviewlikemodelSet: TripReviewLikeTypeConnection;
  tripmodelSet: TripTypeConnection;
};


export type TripReviewTypeTripreviewlikemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  review?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};


export type TripReviewTypeTripmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
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
  uuid: Scalars['UUID'];
  title: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  tripMap?: Maybe<Scalars['JSONString']>;
  gpsTrack?: Maybe<Scalars['JSONString']>;
  published: Scalars['Boolean'];
  costs?: Maybe<Scalars['GenericScalar']>;
  checkList?: Maybe<Scalars['GenericScalar']>;
  todoList?: Maybe<Scalars['GenericScalar']>;
  author?: Maybe<UserType>;
  activities: TripActivitieTypeConnection;
  category: TripCategoryTypeConnection;
  companions: UserTypeConnection;
  images: TripImageTypeConnection;
  reviews: TripReviewTypeConnection;
  Places: PlaceTypeConnection;
  country: CountryTypeConnection;
  likes: Scalars['Int'];
  tripreviewmodelSet: TripReviewTypeConnection;
  tripLikes?: Maybe<TripLikeType>;
  tripcollectionsmodelSet: TripCollectionsTypeConnection;
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
export type TripTypeCategoryArgs = {
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
};


/** Trip description */
export type TripTypeImagesArgs = {
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
  uuid?: Maybe<Scalars['UUID']>;
  trip?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Scalars['ID']>;
  likesCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};


/** Trip description */
export type TripTypePlacesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


/** Trip description */
export type TripTypeCountryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  alpha2?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  unicodeFlag?: Maybe<Scalars['String']>;
};


/** Trip description */
export type TripTypeTripreviewmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['UUID']>;
  trip?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Scalars['ID']>;
  likesCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};


/** Trip description */
export type TripTypeTripcollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  savedTrips?: Maybe<Array<Maybe<Scalars['ID']>>>;
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

export type UpdateProfileInput = {
  profile?: Maybe<ProfileInputType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProfilePayload = {
  __typename?: 'UpdateProfilePayload';
  profile?: Maybe<ProfileType>;
  clientMutationId?: Maybe<Scalars['String']>;
};


export type UserNode = Node & {
  __typename?: 'UserNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  avatar: Scalars['String'];
  profilemodel?: Maybe<ProfileType>;
  user: FollowingTypeConnection;
  followed: FollowingTypeConnection;
  socialAuth: SocialNodeConnection;
  tourmodelSet: TourTypeConnection;
  tourReviews: Array<TourReviewType>;
  userregisteredtourmodelSet: UserRegisteredTourTypeConnection;
  tourLike: Array<TourLikeType>;
  reviews: TripReviewTypeConnection;
  tripreviewlikemodelSet: TripReviewLikeTypeConnection;
  trips: TripTypeConnection;
  tripsInCompanion: TripTypeConnection;
  requirementTripLikes: TripLikeTypeConnection;
  plans: TripPlanTypeConnection;
  plansInCompanion: TripPlanTypeConnection;
  requirementPlaceFeels: PlaceFeelTypeConnection;
  requirementAccessoryLikes: AccessoryLikeTypeConnection;
  articleReviews: ArticleReviewTypeConnection;
  articleRequirementReviewLikes: ArticleReviewLikeTypeConnection;
  articleRequirementReviewDisLikes: ArticleReviewDisLikeTypeConnection;
  articles: ArticleTypeConnection;
  requirementArticleLikes: ArticleLikeTypeConnection;
  tripcollectionsmodelSet: TripCollectionsTypeConnection;
  placecollectionsmodelSet: PlaceCollectionsTypeConnection;
  tourcollectionsmodelSet: TourCollectionsTypeConnection;
  accessorycollectionsmodelSet: AccessoryCollectionsTypeConnection;
  discountcollectionsmodelSet: DiscountCollectionsTypeConnection;
  pk?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  secondaryEmail?: Maybe<Scalars['String']>;
};


export type UserNodeUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  followed?: Maybe<Scalars['ID']>;
  dateFollowed?: Maybe<Scalars['DateTime']>;
};


export type UserNodeFollowedArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
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
  uuid?: Maybe<Scalars['UUID']>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodeUserregisteredtourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserNodeReviewsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['UUID']>;
  trip?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Scalars['ID']>;
  likesCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};


export type UserNodeTripreviewlikemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  review?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};


export type UserNodeTripsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type UserNodeTripsInCompanionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type UserNodeRequirementTripLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodePlansArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type UserNodePlansInCompanionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type UserNodeRequirementPlaceFeelsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  place?: Maybe<Scalars['ID']>;
  user?: Maybe<Array<Maybe<Scalars['ID']>>>;
  feel?: Maybe<Scalars['String']>;
};


export type UserNodeRequirementAccessoryLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  accessory?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodeArticleReviewsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Scalars['ID']>;
};


export type UserNodeArticleRequirementReviewLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodeArticleRequirementReviewDisLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodeArticlesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type UserNodeRequirementArticleLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  article?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodeTripcollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  savedTrips?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodePlacecollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  savedPlaces?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodeTourcollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  savedTours?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodeAccessorycollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  savedAccessories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserNodeDiscountcollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  discount?: Maybe<Scalars['ID']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UserRegisteredTourType = Node & {
  __typename?: 'UserRegisteredTourType';
  /** The ID of the object. */
  id: Scalars['ID'];
  tour: TourType;
  user: UserType;
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
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  avatar: Scalars['String'];
  profilemodel?: Maybe<ProfileType>;
  user: FollowingTypeConnection;
  followed: FollowingTypeConnection;
  socialAuth: SocialNodeConnection;
  tourmodelSet: TourTypeConnection;
  tourReviews: Array<TourReviewType>;
  userregisteredtourmodelSet: UserRegisteredTourTypeConnection;
  tourLike: Array<TourLikeType>;
  reviews: TripReviewTypeConnection;
  tripreviewlikemodelSet: TripReviewLikeTypeConnection;
  trips: TripTypeConnection;
  tripsInCompanion: TripTypeConnection;
  requirementTripLikes: TripLikeTypeConnection;
  plans: TripPlanTypeConnection;
  plansInCompanion: TripPlanTypeConnection;
  requirementPlaceFeels: PlaceFeelTypeConnection;
  requirementAccessoryLikes: AccessoryLikeTypeConnection;
  articleReviews: ArticleReviewTypeConnection;
  articleRequirementReviewLikes: ArticleReviewLikeTypeConnection;
  articleRequirementReviewDisLikes: ArticleReviewDisLikeTypeConnection;
  articles: ArticleTypeConnection;
  requirementArticleLikes: ArticleLikeTypeConnection;
  tripcollectionsmodelSet: TripCollectionsTypeConnection;
  placecollectionsmodelSet: PlaceCollectionsTypeConnection;
  tourcollectionsmodelSet: TourCollectionsTypeConnection;
  accessorycollectionsmodelSet: AccessoryCollectionsTypeConnection;
  discountcollectionsmodelSet: DiscountCollectionsTypeConnection;
  password: Scalars['String'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
};


export type UserTypeUserArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  followed?: Maybe<Scalars['ID']>;
  dateFollowed?: Maybe<Scalars['DateTime']>;
};


export type UserTypeFollowedArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
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
  uuid?: Maybe<Scalars['UUID']>;
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
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
  Places?: Maybe<Array<Maybe<Scalars['ID']>>>;
  accommodation?: Maybe<Array<Maybe<Scalars['ID']>>>;
  country?: Maybe<Scalars['ID']>;
  transfers?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserTypeUserregisteredtourmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserTypeReviewsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['UUID']>;
  trip?: Maybe<Scalars['ID']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Scalars['ID']>;
  likesCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};


export type UserTypeTripreviewlikemodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  review?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};


export type UserTypeTripsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type UserTypeTripsInCompanionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type UserTypeRequirementTripLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  trip?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserTypePlansArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type UserTypePlansInCompanionArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type UserTypeRequirementPlaceFeelsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  place?: Maybe<Scalars['ID']>;
  user?: Maybe<Array<Maybe<Scalars['ID']>>>;
  feel?: Maybe<Scalars['String']>;
};


export type UserTypeRequirementAccessoryLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  accessory?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserTypeArticleReviewsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  author?: Maybe<Scalars['ID']>;
};


export type UserTypeArticleRequirementReviewLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserTypeArticleRequirementReviewDisLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserTypeArticlesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  category?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category_Title?: Maybe<Scalars['String']>;
};


export type UserTypeRequirementArticleLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  article?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserTypeTripcollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  savedTrips?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserTypePlacecollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  savedPlaces?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserTypeTourcollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  savedTours?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserTypeAccessorycollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  savedAccessories?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type UserTypeDiscountcollectionsmodelSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['ID']>;
  discount?: Maybe<Scalars['ID']>;
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
