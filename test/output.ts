{
  "Document": {
    "props": {},
    "children": [
      {
        "SchemaDefinition": {
          "props": {},
          "children": [
            {
              "OperationTypeDefinition": {
                "props": {
                  "operation": "query"
                },
                "children": [
                  {
                    "NamedType": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "Query"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "OperationTypeDefinition": {
                "props": {
                  "operation": "mutation"
                },
                "children": [
                  {
                    "NamedType": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "Mutation"
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "ObjectTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "Query"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "The query type, represents all of the entry points into our object graph"
                  }
                ]
              }
            },
            {
              "Fields": {
                "props": {},
                "children": [
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "hero"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "Character"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "hero2"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "Character"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "reviews"
                              }
                            ]
                          }
                        },
                        {
                          "ListType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "Review"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "search"
                              }
                            ]
                          }
                        },
                        {
                          "ListType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "SearchResult"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "character"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "Character"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "droid"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "Droid"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "human"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "Human"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "starship"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "Starship"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "ObjectTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "Mutation"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "The mutation type, represents all updates we can make to our data"
                  }
                ]
              }
            },
            {
              "Fields": {
                "props": {},
                "children": [
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "createReview"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "Review"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "EnumTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "Episode"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "The episodes in the Star Wars trilogy"
                  }
                ]
              }
            },
            {
              "Values": {
                "props": {},
                "children": [
                  {
                    "EnumValueDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "NEWHOPE"
                              }
                            ]
                          }
                        },
                        {
                          "text": "Star Wars Episode IV: A New Hope, released in 1977."
                        }
                      ]
                    }
                  },
                  {
                    "EnumValueDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "EMPIRE"
                              }
                            ]
                          }
                        },
                        {
                          "text": "Star Wars Episode V: The Empire Strikes Back, released in 1980."
                        }
                      ]
                    }
                  },
                  {
                    "EnumValueDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "JEDI"
                              }
                            ]
                          }
                        },
                        {
                          "text": "Star Wars Episode VI: Return of the Jedi, released in 1983."
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "InterfaceTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "Character"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "A character from the Star Wars universe"
                  }
                ]
              }
            },
            {
              "Fields": {
                "props": {},
                "children": [
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "id"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "ID"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "name"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "String"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "friends"
                              }
                            ]
                          }
                        },
                        {
                          "ListType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "Character"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "friendsConnection"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "FriendsConnection"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "appearsIn"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "ListType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "NamedType": {
                                        "props": {},
                                        "children": [
                                          {
                                            "Name": {
                                              "props": {},
                                              "children": [
                                                {
                                                  "text": "Episode"
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "EnumTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "LengthUnit"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "Units of height"
                  }
                ]
              }
            },
            {
              "Values": {
                "props": {},
                "children": [
                  {
                    "EnumValueDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "METER"
                              }
                            ]
                          }
                        },
                        {
                          "text": "The standard unit around the world"
                        }
                      ]
                    }
                  },
                  {
                    "EnumValueDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "FOOT"
                              }
                            ]
                          }
                        },
                        {
                          "text": "Primarily used in the United States"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "ObjectTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "Human"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "A humanoid creature from the Star Wars universe"
                  }
                ]
              }
            },
            {
              "Fields": {
                "props": {},
                "children": [
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "id"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "ID"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "name"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "String"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "homePlanet"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "String"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "height"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "Float"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "mass"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "Float"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "friends"
                              }
                            ]
                          }
                        },
                        {
                          "ListType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "Character"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "friendsConnection"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "FriendsConnection"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "appearsIn"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "ListType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "NamedType": {
                                        "props": {},
                                        "children": [
                                          {
                                            "Name": {
                                              "props": {},
                                              "children": [
                                                {
                                                  "text": "Episode"
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "starships"
                              }
                            ]
                          }
                        },
                        {
                          "ListType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "Starship"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "ObjectTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "Droid"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "An autonomous mechanical character in the Star Wars universe"
                  }
                ]
              }
            },
            {
              "Fields": {
                "props": {},
                "children": [
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "id"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "ID"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "name"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "String"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "friends"
                              }
                            ]
                          }
                        },
                        {
                          "ListType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "Character"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "friendsConnection"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "FriendsConnection"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "appearsIn"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "ListType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "NamedType": {
                                        "props": {},
                                        "children": [
                                          {
                                            "Name": {
                                              "props": {},
                                              "children": [
                                                {
                                                  "text": "Episode"
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "primaryFunction"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "String"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "ObjectTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "FriendsConnection"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "A connection object for a character's friends"
                  }
                ]
              }
            },
            {
              "Fields": {
                "props": {},
                "children": [
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "totalCount"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "Int"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "edges"
                              }
                            ]
                          }
                        },
                        {
                          "ListType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "FriendsEdge"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "friends"
                              }
                            ]
                          }
                        },
                        {
                          "ListType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "Character"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "pageInfo"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "PageInfo"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "ObjectTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "FriendsEdge"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "An edge object for a character's friends"
                  }
                ]
              }
            },
            {
              "Fields": {
                "props": {},
                "children": [
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "cursor"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "ID"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "node"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "Character"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "ObjectTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "PageInfo"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "Information for paginating this connection"
                  }
                ]
              }
            },
            {
              "Fields": {
                "props": {},
                "children": [
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "startCursor"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "ID"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "endCursor"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "ID"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "hasNextPage"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "Boolean"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "ObjectTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "Review"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "Represents a review for a movie"
                  }
                ]
              }
            },
            {
              "Fields": {
                "props": {},
                "children": [
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "stars"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "Int"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "commentary"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "String"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "InputObjectTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "ReviewInput"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "The input object sent when someone is creating a new review"
                  }
                ]
              }
            },
            {
              "Fields": {
                "props": {},
                "children": [
                  {
                    "InputValueDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "stars"
                              }
                            ]
                          }
                        },
                        {
                          "TypeRef": {
                            "props": {},
                            "children": [
                              {
                                "NonNullType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "NamedType": {
                                        "props": {},
                                        "children": [
                                          {
                                            "Name": {
                                              "props": {},
                                              "children": [
                                                {
                                                  "text": "Int"
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "Description": {
                            "props": {},
                            "children": [
                              {
                                "text": "0-5 stars"
                              }
                            ]
                          }
                        },
                        null
                      ]
                    }
                  },
                  {
                    "InputValueDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "commentary"
                              }
                            ]
                          }
                        },
                        {
                          "TypeRef": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "String"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "Description": {
                            "props": {},
                            "children": [
                              {
                                "text": "Comment about the movie, optional"
                              }
                            ]
                          }
                        },
                        null
                      ]
                    }
                  },
                  {
                    "InputValueDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "favorite_color"
                              }
                            ]
                          }
                        },
                        {
                          "TypeRef": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "ColorInput"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "Description": {
                            "props": {},
                            "children": [
                              {
                                "text": "Favorite color, optional"
                              }
                            ]
                          }
                        },
                        null
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "InputObjectTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "ColorInput"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  {
                    "text": "The input object sent when passing in a color"
                  }
                ]
              }
            },
            {
              "Fields": {
                "props": {},
                "children": [
                  {
                    "InputValueDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "red"
                              }
                            ]
                          }
                        },
                        {
                          "TypeRef": {
                            "props": {},
                            "children": [
                              {
                                "NonNullType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "NamedType": {
                                        "props": {},
                                        "children": [
                                          {
                                            "Name": {
                                              "props": {},
                                              "children": [
                                                {
                                                  "text": "Int"
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "Description": {
                            "props": {},
                            "children": [
                              null
                            ]
                          }
                        },
                        null
                      ]
                    }
                  },
                  {
                    "InputValueDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "green"
                              }
                            ]
                          }
                        },
                        {
                          "TypeRef": {
                            "props": {},
                            "children": [
                              {
                                "NonNullType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "NamedType": {
                                        "props": {},
                                        "children": [
                                          {
                                            "Name": {
                                              "props": {},
                                              "children": [
                                                {
                                                  "text": "Int"
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "Description": {
                            "props": {},
                            "children": [
                              null
                            ]
                          }
                        },
                        null
                      ]
                    }
                  },
                  {
                    "InputValueDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "blue"
                              }
                            ]
                          }
                        },
                        {
                          "TypeRef": {
                            "props": {},
                            "children": [
                              {
                                "NonNullType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "NamedType": {
                                        "props": {},
                                        "children": [
                                          {
                                            "Name": {
                                              "props": {},
                                              "children": [
                                                {
                                                  "text": "Int"
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "Description": {
                            "props": {},
                            "children": [
                              null
                            ]
                          }
                        },
                        null
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "ObjectTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "Starship"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  null
                ]
              }
            },
            {
              "Fields": {
                "props": {},
                "children": [
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "id"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "ID"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "name"
                              }
                            ]
                          }
                        },
                        {
                          "NonNullType": {
                            "props": {},
                            "children": [
                              {
                                "NamedType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "Name": {
                                        "props": {},
                                        "children": [
                                          {
                                            "text": "String"
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "length"
                              }
                            ]
                          }
                        },
                        {
                          "NamedType": {
                            "props": {},
                            "children": [
                              {
                                "Name": {
                                  "props": {},
                                  "children": [
                                    {
                                      "text": "Float"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "FieldDefinition": {
                      "props": {},
                      "children": [
                        {
                          "Name": {
                            "props": {},
                            "children": [
                              {
                                "text": "coordinates"
                              }
                            ]
                          }
                        },
                        {
                          "ListType": {
                            "props": {},
                            "children": [
                              {
                                "NonNullType": {
                                  "props": {},
                                  "children": [
                                    {
                                      "ListType": {
                                        "props": {},
                                        "children": [
                                          {
                                            "NonNullType": {
                                              "props": {},
                                              "children": [
                                                {
                                                  "NamedType": {
                                                    "props": {},
                                                    "children": [
                                                      {
                                                        "Name": {
                                                          "props": {},
                                                          "children": [
                                                            {
                                                              "text": "Float"
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    ]
                                                  }
                                                }
                                              ]
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "UnionTypeDefinition": {
          "props": {},
          "children": [
            {
              "Name": {
                "props": {},
                "children": [
                  {
                    "text": "SearchResult"
                  }
                ]
              }
            },
            {
              "Description": {
                "props": {},
                "children": [
                  null
                ]
              }
            },
            {
              "Types": {
                "props": {},
                "children": [
                  [
                    {
                      "NamedType": {
                        "props": {},
                        "children": [
                          {
                            "Name": {
                              "props": {},
                              "children": [
                                {
                                  "text": "Human"
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    {
                      "NamedType": {
                        "props": {},
                        "children": [
                          {
                            "Name": {
                              "props": {},
                              "children": [
                                {
                                  "text": "Droid"
                                }
                              ]
                            }
                          }
                        ]
                      }
                    },
                    {
                      "NamedType": {
                        "props": {},
                        "children": [
                          {
                            "Name": {
                              "props": {},
                              "children": [
                                {
                                  "text": "Starship"
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                ]
              }
            }
          ]
        }
      }
    ]
  }
}